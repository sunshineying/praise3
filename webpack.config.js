var WebpackDev = require('./config/webpack.dev');
var WebpackProd = require('./config/webpack.prod');

switch(process.env.NODE_ENV) {
  case 'dev':
    module.exports = WebpackDev;
    break;

  case 'prod':
    module.exports = WebpackProd;
    break;

  default:
    module.exports = WebpackDev;
}