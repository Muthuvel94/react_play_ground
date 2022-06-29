# What we Write---> welcome to my webpage

# passed through Babel to convert jsx to javascript

# "React.createElement("h1", null, "welcome to my webpage); (This is what runs in the browser)

# This is what returned from calling create element {$$typeof: Symbol(react,element), key:null, props: ( children: 'welcome to homepage') ref:null type: 'h1'}

# babeljs.to/repl ---> Tool to show you what your JSX is turned into "https://babeljs.io/repl#?browsers=defaults%2C%20not%20ie%2011%2C%20not%20ie_mob%2011&build=&builtIns=false&corejs=3.21&spec=false&loose=false&code_lz=DwEwlgbgfAUMAWBGKB1ApgGwMYHsC2aABAC46F4CehA7mgEYAOAhgOZrAD0SshhwArhh68-GMFABKaEJzHDewOSwBOaNADtZ4mCNHi6Gfuw5ydfDoNidw0IA&debug=false&forceAllTransforms=false&shippedProposals=false&circleciRepo=&evaluate=false&fileSize=false&timeTravel=false&sourceType=module&lineWrap=true&presets=env%2Creact%2Cstage-2&prettier=false&targets=&version=7.18.7&externalPlugins=&assumptions=%7B%7D"

# <h1>welcome to my webpage</h1> ---? writng this doesn't make anything show up in the browser automatically ---->This Creates an instruction for React, telling it to make and element ---?we have to return it from the component for React to use it

# Curly Braces {} mean we are about to reference a JS Variable or Expression E.g Function App() { const message = 'Hi there'; return <h1>{message}</h1>}

# we most oftem use curly braces to shows strings or numbers

# Common Error: React Cannot show an object as text content

# COMPONENT LAYOUT

# Code to compute values we want to show in our JSX ---->function app() {const message='Hello'; const sum=1+1;}

# Content we want this component to show --->return(<div> <div> Message is: {Message}</div><div> Sum is: {Sum}</div>)</div>};}

# input---> to display text field

# Props--->Customizes an element Eg: <input type="number" min={5} max={10}/>

# Props can referto a variable using the same curly braces syntax function App(){ const inputType = "number"; const minValue = 5; return(<input type={inputType} min={minvalue}/> );}

# Props don't have to be defined as variables

# Strings---> Wrap with double quotes

# Numbers----> Wrap with Curly braces

# Arrays, Objects and Variables --->Wrap with Curly braces Eg: Array---> list={[1,2,3]} Eg:Object---> Style={{color:'red'}} Eg: Variables ---> alt={message}

# <h1>{config}</h1> ---> Try to Display an object DOESN'T WORK

# <input : abc={config}/> ---> Try to provide an object as a prob. OK!

# Object doesn't appear on jsx tag

# return <input style={{ border: "3px Solid Red" }} />; to show border color of Text Field

# CONVERTING HTML TO JSX

# return <textarea autoFocus={true} />;

# Names/values of attributes that you provide to elements in HTML are slightly different when writing JSX

# All prop names follow camelCase

# Number Attributes use curly braces

# Boolean 'true' can be written with just the property name. 'False' should be written with curly braces

# The 'class' attribute is written as 'className'

# Rule 1 ---> In JSX, all Prop names follow camelCase

# HTML ---> <input maxlength="5" /> Equivalent JSX---> <input maxLength={5}/>

# <form autocapitalize /> ----> <form autoCapitalize />

# <form novalidate /> ----> <form noValidate/>

# In-line Styles are provided as objects

# React---->Library that Defines what a component is and how multiple component work together

# ReactDOM-->Library that knows how to get a componentto showup in the browser

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
