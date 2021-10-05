# QW Control Documentation

QW Control Documentation project.

## Getting starting

### Dependencies

* NVM - Gerenciador de Versões do Node

```sh
  curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash
  source ~/.bashrc
  nvm list-remote
  nvm install lts/erbium; nvm use lts/erbium
```

* YARN

```sh
  sudo apt install npm
  sudo npm install --global yarn
```

### Recommended setup steps

Run this before the first you start the docs site locally.

```sh
yarn install
```

### Run the QW Control Docs site locally

```sh
yarn run docs:dev
```

> Compiles and hot-reloads for development. As (most) content changes are made they show up immediately.  Changes to the menus will require quitting and restarting with the command above.

### Running in Production

> Compiles and minifies for production.

```sh
yarn run docs:build
```
