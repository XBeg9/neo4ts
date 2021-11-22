FROM gitpod/workspace-full

RUN npm i -g npm@8.1.4 @changesets/cli commitizen npm-check-updates lerna
