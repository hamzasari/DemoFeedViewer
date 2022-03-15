# Demo Feed Viewer

I created this application with `react-native init` command and `typescript-template`.

Also, I will use `yarn` when developing this application. To install `yarn` you can check this [page](https://classic.yarnpkg.com/lang/en/docs/install/).

## Requirements

- [ ] Create a react native app
- [ ] Mock the data with an API
- [ ] Use Redux for global state management
- [ ] Use Styled Components for styling
- [ ] When I launched the app, it should direct me to the Feed view
- [ ] The feed view should be a scrollable list
- [ ] The feed view should show 10 feeds initially
- [ ] Each feed should have an author and a body of content which is limited to 100 characters
- [ ] Each author should have an avatar and a name
- [ ] When I scroll to the top of the list and pull down, it should refresh and load newer feeds
- [ ] When I scroll to the bottom, it should load older posts with lazy loading
- [ ] When I select one of the feeds, it should go to a new screen to show the details of that feed in a more pleasant way
- [ ] In feed detail page, the app should show the avatar and the name of the author and the body of the feed
- [ ] I should be able to navigate back from the feed detail page
- [ ] When I navigated from the feed detail to home, list should automatically scroll to the last element that I opened
- [ ] If I press the Author's avatar or name in the feed detail view, the app should take me to the Profile page for that Author

## Tools

- `Node.js` v16.14.0
- `npm` 8.3.1
- `yarn` 1.22.17
- `React-native`
- `Redux` for global state management
- `Redux Saga` for redux side effects
- `Redux Logger` for development purposes
- `Axios` for api calls
- `Styled Components` for styling
- `Testing Library`
- `Jest` to run tests
- `Eslint` and `Prettier` to write better, cleaner and standard code
- `Fontawesome` library to use cool icons
- `React Navigation` for navigating between pages

## Project Description

I tried to use best practices for the project structure to make this project **scalable**.

### **Redux**

In `redux` folder, I created;

- `reducers` folder to store the reducers
  - In the `rootReducer` file, I combined the reducers and defined the `AppState type` for future use
  - `authorReducer` folder contains the definitions of `Action Types`, `Actions`, `Type Definitions` and `reducer` for the author state
  - `feedReducer` folder contains the definitions of `Action Types`, `Actions`, `Type Definitions` and `reducer` for the feed state
- `sagas` folder to store the sagas
  - In the `rootSaga` file, I combined the sagas I will use
  - `author` folder has only 1 saga, because this is a small project and I can use a limited mock data from `typicode` service, I can have only 6 authors, so I fetch all of them and put them into the global `author` state when home page loads
  - `feed` folder has 2 sagas,
    - At first saga, I fetched the initial 10 feeds from the API and put them into the global `feed` state, this will be used when home page loading is done
    - When I scroll down the flat list on the home page, I will use the second saga for lazy loading and every time the list reaches end of it's items I will simply trigger this saga to get items from API and I used takeEvery redux saga effect for this saga to get every item from every request, if I use other effect like takeLatest it will cancel the pending requests and it will get only the last response and with this way I can lose some items and cannot show them in the list
    - For the pulling down gesture on the top of the feed list to refresh it, I will trigger the first saga to get initial 10 items from the API. By doing this, if any new data is added to the API data then they will be received as the first 10 items and I can show the newer items at the top of the list
- `store` folder to create the store
  - In this folder, I created the redux `store` and defined necessary `AppDispatch type` for future use

### **Middleware**

In `middleware` folder, I added the configurations for axios, defined the api calls and accessor methods for these api calls.

### **Routing**

For routing, I used `react-navigation` for this project.

In `navigation` folder, I defined route definitions and stack navigator for navigation.

### **Tests**

I implemented the unit tests for middleware accessor methods.

I implemented the unit tests for utility methods.
