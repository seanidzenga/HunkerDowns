# www.hunkerdowns.club

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and uses [gh-pages](https://github.com/tschaub/gh-pages) to host the site on github pages.

The purpose of this site is to give an overview of *what, and where* Hunker Downs is and a description of the main event that occurs there: **SubFrequencies**

## Quick start

Clone the repository and run `npm install` to install the dependencies, then use `npm start` to run the app locally.

Commit source code changes to `main` or a feature branch prefixed with your username e.g. `seanidzenga/center-a-div`.

Use `npm run deploy` to publish a new version of the app, this will create a new commit on the `gh-pages` branch which is what GitHub pages serves from.

### CNAME File

GitHub pages requires a **CNAME** file in order to work, and the file needs to be served publicly. Normally it's fine to keep it at the root of your project (in fact GitHub will automatically do that for you when you set a custom domain) but `gh-pages` won't serve that file correctly this way.

Instead the **CNAME** file should be placed in `/public` so that when `gh-pages` works its magic it'll serve the `CNAME` file correctly.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run deploy`

Builds the app for production on GitHub pages and deploys it by committing changes to the `gh-pages` branch.