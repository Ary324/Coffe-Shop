/* @TODO replace with your variables
 * ensure all variables on this page match your project
 */

export const environment = {
  production: false,
  apiServerUrl: 'https://coffe-api/', // the running FLASK api server url
  auth0: {
    url: 'dev-sbjr-zwd.us', // the auth0 domain prefix
    audience: 'cofee shop', // the audience set for the auth0 app
    clientId: 'HH6QOcIdxKsuf5cmayFjmrQLwjLgEwts', // the client id generated for the auth0 app
    callbackURL: 'http://localhost:8100', // the base url of the running ionic application. 
  }
};
