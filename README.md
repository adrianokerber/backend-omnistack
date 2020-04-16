# OmniStack Backend API

The backend application for TinDev (The dev Tinder) developed using Node.js and Javascript.

## Environment setup

* Install [Node.js](https://nodejs.org/en/download/package-manager/) (v10.16.1 or above) via package manager [here](https://nodejs.org/en/download/package-manager/)
    - [Homebrew](https://brew.sh/index_pt-br) for macOS
    - [Chocolatey](https://chocolatey.org/) for Windows
* Install [Yarn](https://classic.yarnpkg.com/en/) for Node package managment instead of [npm](https://www.npmjs.com/). Note: install Yarn via package manager like the step before
* Be happy! :D

### Tips

- Use [VSCode](https://code.visualstudio.com/) as the IDE and set the following extensions:
    - [Dracula Official](https://draculatheme.com/visual-studio-code)
    - [Material Icon Theme](https://github.com/PKief/vscode-material-icon-theme)
- Download and set [Firacode](https://github.com/tonsky/FiraCode) as the font and enable **font programming ligatures** on VSCode

## Running the service

You will need to run the command `yarn` (First time only) to install the Node dependencies that will be stored under _node_modules_ folder.

With the environment set and the dependencies in place, you just need to run the service. Each environment has its own way of starting the service:

* DEV - run `yarn dev` to start the server service

Important: After running the command, to test if the service is up and running, try accessing the service root path. Eg: [http://localhost:3333/](http://localhost:3333/)

## Roadmap

The _2020_  API roadmap

- [x] User registration endpoint
- [x] Endpoint to list all profiles to match
- [x] Like action
- [x] Dislike action
- [ ] Handle error cases using HTTP codes
- [ ] Endpoint to list all users
- [ ] Authentication via [token](https://jwt.io/) instead of our current user's ID header that is insecure
- [ ] Enable security levels using user permissions to prevent unauthorized calls. Each endpoint has a security level and a user can only succeed if he has the required permissions
- [ ] Continuous integration with CircleCI 😍
- [ ] Add a Redis DB to store the mapping of userId and WebSockets in order to transform the server to stateless