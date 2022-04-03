export const environment = {
  production: true,

  // I really dislike this, I prefer to use dotenv (https://www.npmjs.com/package/dotenv)
  // to avoid putting sensitive data into versioned files (git)
  servers: {
    '@api': 'https://api.itnovado.com',
    '@media': 'https://media.itnovado.com',
  }
};
