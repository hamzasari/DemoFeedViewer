import {AxiosResponse} from 'axios';
import {AnyAction} from 'redux';
import {
  all,
  call,
  CallEffect,
  put,
  PutEffect,
  takeEvery,
  takeLatest,
} from 'redux-saga/effects';

import {getInitialFeeds, getOlderFeeds} from '../../../middleware/feeds';

import {
  IFeed,
  FetchOlderFeedRequest,
} from '../../reducers/feedReducer/interfaces';
import {
  fetchFeedFailure,
  fetchFeedSuccess,
  fetchOlderFeedFailure,
  fetchOlderFeedSuccess,
} from '../../reducers/feedReducer/actions';
import {
  FETCH_FEED_REQUEST,
  FETCH_OLDER_FEED_REQUEST,
} from '../../reducers/feedReducer/actionTypes';

/**
 * Generator function that gets initial feeds and puts them into the redux store
 *
 * @description This generator function first tries to get initial feeds from the api and tries to put them into the redux store. If it fails then it puts the failure message into the redux store.
 */
function* fetchInitialFeedsSaga(): Generator<
  CallEffect<AxiosResponse<IFeed[]>> | PutEffect<AnyAction>,
  void,
  AxiosResponse
> {
  try {
    const response = yield call(getInitialFeeds);

    yield put(
      fetchFeedSuccess({
        feeds: response.data,
      }),
    );
  } catch (e: any) {
    yield put(
      fetchFeedFailure({
        error: e.message,
      }),
    );
  }
}

/**
 * Generator function that gets older feeds and puts them into the redux store
 *
 * @description This generator function tries to call the api with action.payload parameter to get older feeds with a start index and a limit and tries to put them into the redux store. If it fails then it puts the failure message into the redux store.
 * @param action Parameter that describes how many items to be retrieved and from which index, we are getting this data from action.payload parameter
 */
function* fetchOlderFeedsSaga(
  action: FetchOlderFeedRequest,
): Generator<
  CallEffect<AxiosResponse<IFeed[]>> | PutEffect<AnyAction>,
  void,
  AxiosResponse
> {
  try {
    const response = yield call(getOlderFeeds, action.payload);

    yield put(
      fetchOlderFeedSuccess({
        feeds: response.data,
      }),
    );
  } catch (e: any) {
    yield put(
      fetchOlderFeedFailure({
        error: e.message,
      }),
    );
  }
}

function* initialFeedsSaga() {
  yield all([takeLatest(FETCH_FEED_REQUEST, fetchInitialFeedsSaga)]);
}

function* olderFeedsSaga() {
  yield all([takeEvery(FETCH_OLDER_FEED_REQUEST, fetchOlderFeedsSaga)]);
}

export {initialFeedsSaga, olderFeedsSaga};
