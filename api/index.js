import axios from 'axios';

export const getRepos = language =>
  axios.request({
    baseURL: `https://github-trending-api.now.sh?language=${language}`,
    method: 'GET'
  });
