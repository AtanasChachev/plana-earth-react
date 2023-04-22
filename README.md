# Project description

This projects uses Open API for fetching data about the emissions for a country. There are multiple filters (country / product / start date / end date). Using Material UI for the layout and chart.js for the chart data representation.

**PLEASE TAKE INTO CONSIDERATION THAT SOMETIMES THE OPEN API IS SLOW AND IT MAY TAKE LONGER TO LOAD**

**IMPORTANT**: 
- Some of the filters requires a long fetching time from the API json so working example would be.
- In order to install the scripts, please use `v14.20.0` of node
- The current branch includes implementation of `react-query`. The previous version was with Axios and React-redux, you can checkout the previous implementation in the `feature/axios-and-block-element-modifier` branch.

**HOW TO RUN THE PROJECT**:

- First you have to create your own `.env` file in the root of the project, copy the values from `.env.example` and put it in the `.env`.
- Run `yarn` to install the dependencies.
- Run `yarn start` to start up the project.
- Afterwards, you can select any type of data, here's an example one:

```
Product - Carbonmonoxide
Country - Germany
Start Date - Any date of 2021
End Date - Any date after start date in range period of few months
```

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:
### `yarn`  or  `yarn install` to install the dependencies.
### `yarn start` to run the project into dev mode.

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
