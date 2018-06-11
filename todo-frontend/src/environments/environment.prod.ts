export const environment = {
  production: true,
  apiUrl: 'http://localhost:3000',
  auth: {
    clientID: 'Of6nY2seQ6Wlr48GCripJC8fn0hL1aMz',
    domain: 'talorlik.eu.auth0.com', // e.g., you.auth0.com
    audience: 'http://localhost:3000',
    redirect: 'http://localhost:4500/callback',
    scope: 'openid profile email'
  }
};
