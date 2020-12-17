const tenantName    = "development365";
const clientID      = "clientID";
const serverPort    = 3000;

module.exports.serverPort = serverPort;

module.exports.credentials = {
  identityMetadata: `https://login.microsoftonline.com/${tenantName}.onmicrosoft.com/.well-known/openid-configuration`, 
  clientID: clientID,
  responseType: 'code id_token',
  responseMode: 'form_post',
  redirectUrl: 'http://localhost:3000/auth/openid/return',
  allowHttpForRedirectUrl: true,
  clientSecret: 'clientSecret',
  validateIssuer: true,
  isB2C: false,
  issuer: null,
  passReqToCallback: false,
  useCookieInsteadOfSession: true,
  cookieEncryptionKeys: [
    { 'key': 'key', 'iv': 'iv' },
    { 'key': 'key', 'iv': 'iv' }
  ],
  scope: null,
  loggingLevel: 'info',
  nonceLifetime: null,
  nonceMaxAmount: 5,
  clockSkew: null,
};

exports.resourceURL = 'https://graph.windows.net';

exports.destroySessionUrl = 'https://login.microsoftonline.com/common/oauth2/logout?post_logout_redirect_uri=http://localhost:3000';

exports.useMongoDBSessionStore = false;

exports.databaseUri = 'mongodb://localhost/OIDCStrategy';

exports.mongoDBSessionMaxAge = 24 * 60 * 60;

exports.secretKey = 'i-love-app-on-azure';