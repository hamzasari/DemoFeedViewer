import {all, fork} from 'redux-saga/effects';

import authorsSaga from './author';
import {initialFeedsSaga, olderFeedsSaga} from './feed';

function* rootSaga() {
  yield all([fork(authorsSaga), fork(initialFeedsSaga), fork(olderFeedsSaga)]);
}

export default rootSaga;
