This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

Clothing store created with create-react-app and added some little bitty extras under the hood. LOOK AT THAT UNIDIRECTIONAL DATA FLOW. 

# UPDATE as of 12-11-2019:
Added an alternative package.json called package-babelfix.json. I basically establish a resolutions property to that package-babelfix.json because if we use that one instead of our original we just need to run yarn install and it will fix any issues that arise due to versioning issues. 

Normally if you clone this repo and your original environment globally is different from your local project dependencies, there will be a conflict when running your application. Best way to do this, if it is a stable release for other possible breaking dependencies, is to not uninstall the dependency, remove any lock files but to just add the property of resolutions to your package.json and run an npm install. As I have not had any of those issues, I have decided to just add an extra to show you what it looks like.


# Update as of 12-12-2019:

No bugs to report. Added signing and sign up components. These will actually keep state at component as if we were to push state a level up it would cause the DOM to reload and we want to reduce multiple rerenders as much as possible because React was built to do just this. 

-Signin- will be based off of accounts created using the sign up form. Via email & password or google.

-Signup- 

