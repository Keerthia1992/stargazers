### How to run app & test


#### `npm install`

Run the above command to install node modules specified in package.json

#### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

#### `npm test`

Launches the test runner in the interactive watch mode.

#### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


### Future Improvements

Feel free to elaborate on how you would improve any of the following topics 

* Code Structuring:

 I preferred to have function specific folder structure here as it is a small app, but depending how features are coupled I would go feature specific folder structure, this helps to clearly separate the concerns across features added feature toggling would be easier and also helps to cleanup the code when a feature is no longer adds business value

* Refactoring:

I would make some time to add some prettier rules and eslint rules and husky to cleanup linting/formatting issues much early before the code hits a PR phase

* Additional Features:

1. I might try leveling up the feature and route to `https://github.com/topics` to corresponding landing pages to give a sense of what the app does.
2. Also I would add auto complete on the recent searches so user can put recent search string by selecting the suggestions(kinda of what google does when you start typing - debounce is way to go.)

### Challenges 
1. the only challenge was to try understanding the dynamics of GraphQL and related dependencies, I explored few open source projects and get a sense of how to integrate.


I really enjoyed working on the assignment as it provided me with an opportunity to learn in depth about GraphQL.