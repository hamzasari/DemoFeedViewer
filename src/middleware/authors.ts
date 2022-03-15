import {AuthorApis} from './services';

/**
 * getAuthors method
 *
 * @description This method calls the GetAuthors method from AuthorApis asynchronously, we are getting all authors because this is a small project and we have only 6 authors, but when we want to scale this application we need to implement necessary api calls and other functionalities
 * @returns All authors
 */
export const getAuthors = async () => {
  return await AuthorApis.GetAuthors();
};
