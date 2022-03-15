import {FeedApis} from './services';
import {FeedApiParam} from './services/interfaces';

/**
 * getInitialFeeds method
 *
 * @description This method calls the GetInitialData method from FeedApis asynchronously
 * @returns Initial 10 feeds
 */
export const getInitialFeeds = async () => {
  return await FeedApis.GetInitialData();
};

/**
 * getOlderFeeds method
 *
 * @description This method calls the GetOlderData method from FeedApis asynchronously
 * @param params This object contains a start and a limit property in it
 * @returns Feeds from api starting at params.start and ending at params.limit
 */
export const getOlderFeeds = async (params: FeedApiParam) => {
  return await FeedApis.GetOlderData(params);
};
