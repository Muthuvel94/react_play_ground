# Stuff to Still Figure out ---> 1. How do we get feedback from the user? --> 2. How do we fetch data from some outer API or Servers? --> 3. How do we show list of records?

# App Challenges ---> 1. Need to get a search term from the user --> 2. Need to use that search term to make a request to an outside API and fetch data --> 3.Need to take the fetched images and show them on the screen in the list

# Controlled vs uncontrolled Elements

# Flow --> 1.user types in input --> 2. callback get invoked ---> 3.we call setState with the new value --> 4.Component rerenders ---> 5. input is told what its value is (coming from the state)

# HTML World --> <inputvalue="hithere"/> --> React world ??? before refacter to controlled (what is the value of imput right now)

# React world --> state -> {term 'hi there'} DOM World --><inputvalue={golookatstatetogetcurrentvalue}>

# what is 'this' used for in a class? -->How is the value of 'this' determined in a function?

# Instance of SearchBar --> State, render and onFormSubmit ---> this (calls state, render and onformsubit)

# App (this.onSearchSubmit) ---> SearchBar (user submitted the form? Better call my callback to tell App! (this.onsearchsubmit )) --->ImageList

# our App (Client) ---> send me data about pics for 'car' -->UnSplash API ---> Here you go ---> our APP

# axios --> 3rd party package fetch --> function built into modern browsers

# Component renders itself one time with no list of images -->onSearchSubmit method called ---> Request made to splash ...wait... -->Request complete --> Set Image data on state of App Component -->App Component rerenders and shows Images

# Let the Imagecard render itself and its image ---> Reach into the DOM and figure out the height of the image --> set the image height on state to get the components to rerender --> when rerendering, assign a 'grid-row-end' to make sure the image takes up the appropriate space.

# React Refs--->gives access to a Single DOM Element --> We create refs in the constructor, assign them to instance variables, then pass to a particular JSX element as props.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

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

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
