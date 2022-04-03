export const environment = {
  production: false,

  // I really dislike this, I prefer to use dotenv (https://www.npmjs.com/package/dotenv)
  // to avoid putting sensitive data into versioned files (git)
  servers: {
    '@api': 'https://fakestoreapi.com',
    '@media': 'https://jsonplaceholder.com',
  }
};
