import { config as envConfig } from 'dotenv';

envConfig();
const config = {
  api: {
    domain: process.env.REACT_APP_API_DOMAIN || '',
  },
};
export default config;
