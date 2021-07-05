import axios from 'axios';
const instance = axios.create({
    baseURL: 'https://api-recruit-software.rudraserver.com/api/v1/',
  });

export default instance