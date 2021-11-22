FROM gitpod/workspace-full

ENV SHELL=zsh
ENV ZSH_THEME="powerlevel10k/powerlevel10k"

RUN sudo apt-get update && \
    sudo apt-get install -y zsh && \
    sudo rm -rf /var/lib/apt/lists/*

# .zshrc source all the files under /home/gitpod/.bashrc.d/*
RUN echo "for i in $(ls $HOME/.bashrc.d/*); do source $i; done" > ~/.zshrc

# Install oh-my-zsh now
RUN sh -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"

# Install powerlevel10k theme
RUN git clone --depth=1 https://github.com/romkatv/powerlevel10k.git ${ZSH_CUSTOM:-$HOME/.oh-my-zsh/custom}/themes/powerlevel10k


# Install global packages
RUN npm i -g npm@8.1.4 @changesets/cli commitizen npm-check-updates lerna
