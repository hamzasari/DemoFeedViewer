import {AxiosResponse} from 'axios';
import {AnyAction} from 'redux';
import {
  all,
  call,
  CallEffect,
  put,
  PutEffect,
  takeLatest,
} from 'redux-saga/effects';

import {getAuthors} from '../../../middleware/authors';

import {IAuthor} from '../../reducers/authorReducer/interfaces';
import {
  fetchAuthorFailure,
  fetchAuthorSuccess,
} from '../../reducers/authorReducer/actions';
import {FETCH_AUTHOR_REQUEST} from '../../reducers/authorReducer/actionTypes';

/**
 * Generator function that gets authors and puts them into the redux store
 *
 * @description This generator function first tries to get authors from the api and tries to put them into the redux store. If it fails then it puts the failure message into the redux store.
 */
function* fetchAuthorsSaga(): Generator<
  CallEffect<AxiosResponse<IAuthor[]>> | PutEffect<AnyAction>,
  void,
  AxiosResponse
> {
  try {
    const response = yield call(getAuthors);

    yield put(
      fetchAuthorSuccess({
        authors: response.data,
      }),
    );
  } catch (e: any) {
    yield put(
      fetchAuthorFailure({
        error: e.message,
      }),
    );
  }
}

function* authorsSaga() {
  yield all([takeLatest(FETCH_AUTHOR_REQUEST, fetchAuthorsSaga)]);
}

export default authorsSaga;
