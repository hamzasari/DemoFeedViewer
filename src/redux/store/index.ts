import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';

import rootReducer from '../reducers/rootReducer';
import rootSaga from '../sagas/rootSaga';

// Create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// Mount it on the store
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware, logger));

// export the type of dispatch for future use
export type AppDispatch = typeof store.dispatch;

// Run the saga
sagaMiddleware.run(rootSaga);

export default store;
