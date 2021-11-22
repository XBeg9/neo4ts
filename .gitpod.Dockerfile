FROM gitpod/workspace-full

ENV SHELL=zsh

RUN sudo apt-get update && \
    sudo apt-get install -y zsh && \
    sudo rm -rf /var/lib/apt/lists/*

# Install oh-my-zsh now
RUN sh -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"

COPY .zshrc ~/.zshrc

# .zshrc source all the files under /home/gitpod/.bashrc.d/*
RUN echo "for i in $(ls $HOME/.bashrc.d/*); do source $i; done" >> ~/.zshrc

# Install powerlevel10k theme
RUN git clone --depth=1 https://github.com/romkatv/powerlevel10k.git ${ZSH_CUSTOM:-$HOME/.oh-my-zsh/custom}/themes/powerlevel10k

# Install oh-my-zsh plugins
RUN git clone https://github.com/zsh-users/zsh-autosuggestions ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-autosuggestions

# Install global packages
RUN npm i -g npm@8.1.4 @changesets/cli commitizen npm-check-updates lerna
