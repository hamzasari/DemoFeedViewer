import {FeedApiParam} from '../../../middleware/services/interfaces';
import {
  FETCH_FEED_REQUEST,
  FETCH_FEED_SUCCESS,
  FETCH_FEED_FAILURE,
  FETCH_OLDER_FEED_REQUEST,
  FETCH_OLDER_FEED_SUCCESS,
  FETCH_OLDER_FEED_FAILURE,
} from './actionTypes';
import {
  FetchFeedRequest,
  FetchFeedSuccess,
  FetchFeedSuccessPayload,
  FetchFeedFailure,
  FetchFeedFailurePayload,
  FetchOlderFeedRequest,
  FetchOlderFeedSuccess,
  FetchOlderFeedFailure,
} from './interfaces';

export const fetchFeedRequest = (): FetchFeedRequest => ({
  type: FETCH_FEED_REQUEST,
});

export const fetchFeedSuccess = (
  payload: FetchFeedSuccessPayload,
): FetchFeedSuccess => ({
  type: FETCH_FEED_SUCCESS,
  payload,
});

export const fetchFeedFailure = (
  payload: FetchFeedFailurePayload,
): FetchFeedFailure => ({
  type: FETCH_FEED_FAILURE,
  payload,
});

export const fetchOlderFeedRequest = (
  payload: FeedApiParam,
): FetchOlderFeedRequest => ({
  type: FETCH_OLDER_FEED_REQUEST,
  payload,
});

export const fetchOlderFeedSuccess = (
  payload: FetchFeedSuccessPayload,
): FetchOlderFeedSuccess => ({
  type: FETCH_OLDER_FEED_SUCCESS,
  payload,
});

export const fetchOlderFeedFailure = (
  payload: FetchFeedFailurePayload,
): FetchOlderFeedFailure => ({
  type: FETCH_OLDER_FEED_FAILURE,
  payload,
});
