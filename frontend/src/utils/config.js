let config = {
  hostUrl: '',
  apiUrl: '',
}

if (process.env.NODE_ENV === 'development') {
  config = {
    hostUrl: 'http://localhost:3001',
    apiUrl: 'http://localhost:3001/api',
  }
}

/*const config = {
  hostUrl: 'http://localhost:3001',
  apiUrl: 'http://localhost:3001/api',
}*/

export default config;