import {
  FETCH_FEED_REQUEST,
  FETCH_FEED_SUCCESS,
  FETCH_FEED_FAILURE,
  FETCH_OLDER_FEED_REQUEST,
  FETCH_OLDER_FEED_SUCCESS,
  FETCH_OLDER_FEED_FAILURE,
} from './actionTypes';
import {FeedActions, FeedState} from './interfaces';

const initialState: FeedState = {
  pending: false,
  pendingForOlderFeeds: false,
  feeds: [],
  error: null,
};

export default (state = initialState, action: FeedActions) => {
  switch (action.type) {
    case FETCH_FEED_REQUEST:
      return {
        ...state,
        pending: true,
      };
    case FETCH_FEED_SUCCESS:
      return {
        ...state,
        pending: false,
        feeds: action.payload.feeds,
        error: null,
      };
    case FETCH_FEED_FAILURE:
      return {
        ...state,
        pending: false,
        feeds: [],
        error: action.payload.error,
      };
    case FETCH_OLDER_FEED_REQUEST:
      return {
        ...state,
        pendingForOlderFeeds: true,
      };
    case FETCH_OLDER_FEED_SUCCESS:
      return {
        ...state,
        pendingForOlderFeeds: false,
        feeds: [...state.feeds, ...action.payload.feeds],
        error: null,
      };
    case FETCH_OLDER_FEED_FAILURE:
      return {
        ...state,
        pendingForOlderFeeds: false,
        error: action.payload.error,
      };
    default:
      return {
        ...state,
      };
  }
};
