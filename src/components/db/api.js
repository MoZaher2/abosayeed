
import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://tripswebsite.onrender.com/api',
});

export default instance;
