# Demo Feed Viewer

I created this application with `react-native init` command and `typescript-template`.

Also, I will use `yarn` when developing this application. To install `yarn` you can check this [page](https://classic.yarnpkg.com/lang/en/docs/install/).

## Requirements

- [x] Create a react native app
- [x] Mock the data with an API
- [x] Use Redux for global state management
- [x] Use Styled Components for styling
- [x] When I launched the app, it should direct me to the Feed view
- [x] The feed view should be a scrollable list
- [x] The feed view should show 10 feeds initially
- [x] Each feed should have an author and a body of content which is limited to 100 characters
- [x] Each author should have an avatar and a name
- [x] When I scroll to the top of the list and pull down, it should refresh and load newer feeds
- [x] When I scroll to the bottom, it should load older posts with lazy loading
- [x] When I select one of the feeds, it should go to a new screen to show the details of that feed in a more pleasant way
- [x] In feed detail page, the app should show the avatar and the name of the author and the body of the feed
- [x] I should be able to navigate back from the feed detail page
- [x] When I navigated from the feed detail to home, list should automatically scroll to the last element that I opened
- [x] If I press the Author's avatar or name in the feed detail view, the app should take me to the Profile page for that Author

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

I used different approaches when using global state management. For example, in `pages/Home` I get the state values from redux on the page and pass them as props to child components with prop drilling.

But in the `molecules/AvatarForDetailPage` and `molecules/AvatarForListItem` components I accessed the global state values directly from the child component.

I did this **intentionally** to show different approaches.

### **Middleware**

In `middleware` folder, I added the configurations for axios, defined the api calls and accessor methods for these api calls.

### **Routing**

For routing, I used `react-navigation` for this project.

In `navigation` folder, I defined route definitions and stack navigator for navigation.

I tried to handle all navigation in the pages, so I passed necessary props to child components.

I did this **intentionally** too, because I didn't want to call navigate function within a child component.

Of course this is a decision, we can call the navigate function within a child component too.

### **Components**

I used `Atomic Design` principles for component structuring and put all components in `components` folder.

In `components` folder, I defined the components related to atomic design structure folders as below;

- atoms
  - BackIcon
  - CompanyLogo
  - CompanyName
- molecules
  - AvatarForDetailPage
  - AvatarForListItem
  - BackButton
  - CompanyLogoWithName
  - FeedListItem
  - ProfileDetailItem
- organisms
  - FeedList
  - Header
- pages
  - FeedDetail
  - Home
  - Profile
- templates
  - empty for now

I could use the `default navigation header`, but it may appear differently on different platforms. So, instead of using it, I created a separate `header` component with a back button that will shown or will not for inner pages with different backlink functionality.

Right now, I used this header component in the pages, maybe I can customize the default navigation header with this component in the future. But if I use this component as a replacement for default navigation bar, I cannot add some custom functionality to it. For example, if I want to add a search input to header, it won't work in the default navigation header bar. So, I couldn't decide and left it like this. If it is needed I can definitely replace the default navigation header bar with this component.

I also, implemented `hardware back press button` functionality to scroll to last opened feed item in the list after going back from feed detail to home.

### **Styling**

For styling, I used `styled-components`.

I defined the each style file in the relevant folder of components. I defined global style file for icons in `src/styles` directory.

### **Mock Data**

For getting mock data, I used https://jsonplaceholder.typicode.com/ service with one of my public github repositories(https://github.com/hamzasari/mock-data-for-feed-viewer).

To access the API I used this address: https://my-json-server.typicode.com/hamzasari/mock-data-for-feed-viewer

Because of the limitations of this service, I could use very small amount of data for this application.

### **Tests**

I implemented the unit tests for middleware accessor methods.

I implemented the unit tests for utility methods.

I implemented some unit tests for components, but I didn't implement for all of them. Because this is a small project and components have no logical operations, so I thought writing unit tests for every component is not necessary for this project. Nevertheless, to show how to write unit tests for components, I implemented some examples.

In general, I use unit tests to test logical/behavioral operations, for UI testing I use Snapshot testing for mature components and for developing components I use storybook for visual testing. But for this small project, I didn't configured all of these.

### **Branching**

Because this is such a small project for only demo purposes, I used only main branch and I didn't use separate branches and pull requests to merge the code in another branch like development or master.

But generally, I always use separate branches for new features, bug fixes or hot fixes, and I always use Pull Requests to do code reviews and to merge the code.

## Installation and Running

I only tested this application on an `Android Emulator` on a very slow Windows PC, because that's only what I have.
So, if you will try to run this application on `mac`, you should follow the mac specific rules like `pod install`, ... on this [page](https://reactnative.dev/docs/environment-setup).

You need `Android Studio with Emulator`, `node.js with npm` and `yarn` are installed on your machine as prerequisites.

After cloning this project from the github repository, you should run `yarn` or `yarn install` command in the root folder of the project to install necessary dependencies.

After installing dependencies, you can run the `yarn android` command to run the application in `debug mode` on `Android emulator`.

## Further Topics

- Installing `husky` to prevent commits with lint errors, I generally install this tool but for this small project I ignored to save time.
- Maybe move header to more general area like Routes.js or use the header component to replace and customize default navigation header
- Creating API with add, update, delete functionality and refactor code to adapt it.
- Better styling with a style guide.
- Storybook implementation.
- Snapshot tests for mature components.
- If new logic, utility functions or APIs are added, relevant unit tests should also be implemented.
- Dockerizing application for deployment.
- Creating devops pipeline for CI and CD.
