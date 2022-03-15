import axios from 'axios';

import config from './config';

// We can configure the api here

const api = axios.create({
  baseURL: config.FeedHost.EndPoint,
});

// Also, we can use interceptors to intercept requests with api.interceptors.request.use or api.interceptors.response.use methods

export default api;
