FROM gitpod/workspace-full

ENV SHELL=zsh

RUN sudo apt-get update && \
    sudo apt-get install -y zsh && \
    sudo rm -rf /var/lib/apt/lists/*

# Install oh-my-zsh now
RUN sh -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"

# .zshrc source all the files under /home/gitpod/.bashrc.d/*
RUN echo "for i in $(ls $HOME/.bashrc.d/*); do source $i; done" > ~/.zshrc

# Install global packages
RUN npm i -g npm@8.1.4 @changesets/cli commitizen npm-check-updates lerna
