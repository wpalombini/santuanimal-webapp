import axios from 'axios';
import { getApiBaseUrl } from 'lib/config';
import { getUserTokenId } from './firebase';

const httpClient = axios.create({
  baseURL: getApiBaseUrl(),
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
});

httpClient.interceptors.request.use(async request => {
  const token = await getUserTokenId();

  if (token) {
    request.headers = {
      ...request.headers,
      Authorization: `Bearer ${token}`,
    };
  }
  return request;
});

export default httpClient;
