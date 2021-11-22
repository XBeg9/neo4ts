FROM gitpod/workspace-full

ENV SHELL=zsh

RUN sudo apt-get update && \
    sudo apt-get install -y zsh jq python3-dev python3-pip python3-setuptools

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
RUN sh -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"

# Install powerlevel10k theme
RUN git clone --depth=1 https://github.com/romkatv/powerlevel10k.git ${ZSH_CUSTOM:-$HOME/.oh-my-zsh/custom}/themes/powerlevel10k

COPY docker/* /home/gitpod/

# Install oh-my-zsh plugins
RUN git clone --depth=1 https://github.com/zsh-users/zsh-autosuggestions ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-autosuggestions && \
    git clone --depth=1 https://github.com/zsh-users/zsh-syntax-highlighting.git ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-syntax-highlighting && \
    git clone --depth=1 https://github.com/zsh-users/zsh-completions ${ZSH_CUSTOM:=~/.oh-my-zsh/custom}/plugins/zsh-completions

# Install gitstatus https://github.com/romkatv/gitstatus#using-from-zsh
RUN git clone --depth=1 https://github.com/romkatv/gitstatus.git ~/gitstatus

# Install global packages
RUN npm i -g npm@8.1.4 @changesets/cli commitizen npm-check-updates lerna

# Install NVM
RUN curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash

# install fzf is a general-purpose command-line fuzzy finder. https://github.com/junegunn/fzf
RUN git clone --depth 1 https://github.com/junegunn/fzf.git ~/.fzf && ~/.fzf/install

# install thefuck helper https://github.com/nvbn/thefuck
RUN sudo pip3 install thefuck
