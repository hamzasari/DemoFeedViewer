import api from './api';

import {FeedApiParam} from './interfaces';

import {IAuthor} from '../../redux/reducers/authorReducer/interfaces';
import {IFeed} from '../../redux/reducers/feedReducer/interfaces';

/**
 * Author Apis
 *
 * I didn't define any other requests here,
 * because for this small demo project we have only 6 authors,
 * but if we want to scale this application we can define other methods to get specific author not all authors to reduce size complexity of the application and use those methods when needed
 */
export const AuthorApis = {
  GetAuthors: () => api.get<IAuthor[]>('/authors'),
};

/**
 * Feed Apis
 *
 * If we want functionality like adding new feeds we can define them in here
 */
export const FeedApis = {
  // I hardcoded the start to 0 and the limit to 10 for this definition, because we want to get first 10 items initially
  GetInitialData: () =>
    api.get<IFeed[]>('/feeds?_start=0&_limit=10&_sort=id&_order=desc'),
  GetOlderData: (params: FeedApiParam) =>
    api.get<IFeed[]>(
      `/feeds?_start=${params.start}&_limit=${params.limit}&_sort=id&_order=desc`,
    ),
};
