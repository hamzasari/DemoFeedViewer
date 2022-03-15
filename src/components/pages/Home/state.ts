import {AppState} from '../../../redux/reducers/rootReducer';
import {AppDispatch} from '../../../redux/store';
import {FeedApiParam} from '../../../middleware/services/interfaces';
import {fetchAuthorRequest} from '../../../redux/reducers/authorReducer/actions';
import {
  fetchFeedRequest,
  fetchOlderFeedRequest,
} from '../../../redux/reducers/feedReducer/actions';

/**
 * Maps current state to props
 *
 * @param state state
 * @returns necessary props
 */
export const mapStateToProps = (state: AppState) => ({
  pending: state?.feed?.pending,
  error: state?.feed?.error,
  feeds: state?.feed?.feeds,
});

/**
 * Dispatch actions on methods called from props
 *
 * @param dispatch dispatch function
 * @returns dispatch functions as object
 */
export const mapDispatchToProps = (dispatch: AppDispatch) => ({
  getAuthors: () => {
    dispatch(fetchAuthorRequest());
  },
  getInitialFeeds: () => {
    dispatch(fetchFeedRequest());
  },
  getOlderFeeds: (params: FeedApiParam) => {
    dispatch(fetchOlderFeedRequest(params));
  },
});
