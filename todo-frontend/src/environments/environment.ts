// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  apiUrl: 'http://localhost:3000',
  auth: {
    clientID: 'Of6nY2seQ6Wlr48GCripJC8fn0hL1aMz',
    domain: 'talorlik.eu.auth0.com', // e.g., you.auth0.com
    audience: 'http://localhost:3000',
    redirect: 'http://localhost:4400/callback',
    scope: 'openid profile email'
  }
};
