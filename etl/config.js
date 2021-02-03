var convict = require('convict');
 
// Define a schema
var config = convict({
  db: {
    url: {
      doc: 'Database host name/IP',
      format: '*',
      default: 'mongodb://localhost:27017/rve',
      env: 'DB_URL',
    },
  },
});
 
// Perform validation
config.validate({allowed: 'strict'});
 
module.exports = config;
