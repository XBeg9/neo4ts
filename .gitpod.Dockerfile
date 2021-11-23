FROM gitpod/workspace-full

ENV SHELL=zsh

USER gitpod

# Install tailscale
RUN curl -fsSL https://pkgs.tailscale.com/stable/ubuntu/focal.gpg | sudo apt-key add - \
     && curl -fsSL https://pkgs.tailscale.com/stable/ubuntu/focal.list | sudo tee /etc/apt/sources.list.d/tailscale.list \
     && sudo apt-get update \
     && sudo apt-get install -y tailscale

# Install OS packages and other tools
RUN sudo apt-get install -y zsh jq python3-dev python3-pip python3-setuptools

# Install exa (https://github.com/ogham/exa)
RUN sudo apt install -y libgit2-dev rustc && \
    sudo apt-mark auto rustc && \
    git clone https://github.com/ogham/exa --depth=1 && \
    cd exa && \
    cargo build --release && \
    sudo install target/release/exa /usr/local/bin/exa && \
    cd .. && \
    rm -rf exa

# Install oh-my-zsh now
RUN sh -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)" && \
    chown gitpod:gitpod ~/.zshrc

# Install powerlevel10k theme
RUN git clone --depth=1 https://github.com/romkatv/powerlevel10k.git ${ZSH_CUSTOM:-$HOME/.oh-my-zsh/custom}/themes/powerlevel10k

COPY docker/* .nvmrc /home/gitpod/

# Install oh-my-zsh plugins
RUN git clone --depth=1 https://github.com/zsh-users/zsh-autosuggestions ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-autosuggestions && \
    git clone --depth=1 https://github.com/zsh-users/zsh-syntax-highlighting.git ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-syntax-highlighting && \
    git clone --depth=1 https://github.com/zsh-users/zsh-completions ${ZSH_CUSTOM:=~/.oh-my-zsh/custom}/plugins/zsh-completions

# Install gitstatus https://github.com/romkatv/gitstatus#using-from-zsh
RUN git clone --depth=1 https://github.com/romkatv/gitstatus.git ~/gitstatus

# Install NVM
RUN curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash

# Init NVM and install current node version
RUN export NVM_DIR="$HOME/.nvm" && \
    [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" && \
    export NODE_VERSION=$(cat /home/gitpod/.nvmrc) && \
    nvm install $NODE_VERSION && \
    nvm alias default $NODE_VERSION && \
    nvm install-latest-npm

# install fzf is a general-purpose command-line fuzzy finder. https://github.com/junegunn/fzf
RUN git clone --depth 1 https://github.com/junegunn/fzf.git ~/.fzf && ~/.fzf/install

# install thefuck helper https://github.com/nvbn/thefuck
RUN sudo pip3 install thefuck

# Install global packages
RUN npm i -g @changesets/cli commitizen npm-check-updates lerna rimraf

# Set buildx as the default builder
RUN docker buildx install
