const dev = true;

export const AxiosConfigs = {
  BASE_URL: dev ? 'http://localhost' : 'https://test.com',
  TIMEOUT: '',
};

export const MICROSERVICE_BASE_URL = dev
  ? {
    AUTH_SERV: `${AxiosConfigs.BASE_URL}:3002/api/v1/users`,
    CATEGORIES: `${AxiosConfigs.BASE_URL}:3002/api/v1/categories`,
    SERVICES: `${AxiosConfigs.BASE_URL}:3002/api/v1/services`,
  } : {
    AUTH_SERV: `${AxiosConfigs.BASE_URL}:3002/api/v1/users`,
    CATEGORIES: `${AxiosConfigs.BASE_URL}:3002/api/v1/categories`,
    SERVICES: `${AxiosConfigs.BASE_URL}:3002/api/v1/services`,
  }