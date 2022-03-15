import {AppState} from '../../../redux/reducers/rootReducer';

/**
 * Maps current state to props
 *
 * @param state state
 * @returns necessary props
 */
export const mapStateToProps = (state: AppState) => ({
  authors: state?.author?.authors,
});
