import {combineReducers} from 'redux';

import feedReducer from './feedReducer';
import authorReducer from './authorReducer';

// Combine the reducers
const rootReducer = combineReducers({
  feed: feedReducer,
  author: authorReducer,
});

// export the type of state for future use
export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
