# Search Project Frontend

Please be aware this project was developed just with educational purposes, there are things that must be done for working on real production environment. 

This FrontEnd shows information coming from a server which implements backend API [search-project-be](https://github.com/dmorav1/search-project-be).

This is an ongoing project and could have errors, if you want to test it, there is a versioned deployed at 

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

## Steps to run & deploy

For running this project you must to setup environment variable `REACT_APP_API_URL` with the URL of backend API. for testing purposes you can setup `https://search-project-be.herokuapp.com/api`

Once you have it, please follow section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) in order to deploy this react project in your preferred platform. 

##To do

As this is yet an ongoing project, following things are pending:
- Create routes to view showing individual search element details.
- Refactor code following better pattern than current. 
- Implement test cases with jest.
- Add CSS Design. 
- Pending on demo deployment



