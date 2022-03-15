import {FeedApiParam} from '../../../middleware/services/interfaces';
import {
  FETCH_FEED_REQUEST,
  FETCH_FEED_SUCCESS,
  FETCH_FEED_FAILURE,
  FETCH_OLDER_FEED_REQUEST,
  FETCH_OLDER_FEED_SUCCESS,
  FETCH_OLDER_FEED_FAILURE,
} from './actionTypes';

export interface IFeed {
  id: number;
  author_id: number;
  body: string;
}

export interface FeedState {
  pending: boolean;
  pendingForOlderFeeds: boolean;
  feeds: IFeed[];
  error: string | null;
}

export interface FetchFeedSuccessPayload {
  feeds: IFeed[];
}

export interface FetchFeedFailurePayload {
  error: string;
}

export interface FetchFeedRequest {
  type: typeof FETCH_FEED_REQUEST;
}

export type FetchFeedSuccess = {
  type: typeof FETCH_FEED_SUCCESS;
  payload: FetchFeedSuccessPayload;
};

export type FetchFeedFailure = {
  type: typeof FETCH_FEED_FAILURE;
  payload: FetchFeedFailurePayload;
};

export interface FetchOlderFeedRequest {
  type: typeof FETCH_OLDER_FEED_REQUEST;
  payload: FeedApiParam;
}

export type FetchOlderFeedSuccess = {
  type: typeof FETCH_OLDER_FEED_SUCCESS;
  payload: FetchFeedSuccessPayload;
};

export type FetchOlderFeedFailure = {
  type: typeof FETCH_OLDER_FEED_FAILURE;
  payload: FetchFeedFailurePayload;
};

export type FeedActions =
  | FetchFeedRequest
  | FetchFeedSuccess
  | FetchFeedFailure
  | FetchOlderFeedRequest
  | FetchOlderFeedSuccess
  | FetchOlderFeedFailure;
