# hackpompey.co.uk

### Development Setup
This site is built using Gatsby.js and uses NPM for dependency management.

Start by installing [Node/NPM](https://nodejs.org/) if you don't already have it.

If you are new to Gatsby.js then start by installing the CLI.

```
npm install -g gatsby-cli
```

Next, to install the project dependencies navigate to the project directory (where `package.json` is located) and run:
```
npm install
```

To build and deploy the site locally, run:
```
gatsby develop
```

Once Gatsby is ready, you can view the site at http://localhost:8000/

You can also interact with the GraphQL via http://localhost:8000/___graphql

Gatsby will watch for any file changes and automatically rebuild as needed. 
If you do not see your changes take effect, check the CLI for build errors.

Changes to the Gatsby config files may require you to stop and restart `gatsby develop`
