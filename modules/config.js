const env = process.env.NODE_ENV === 'development' ? 'development' : 'production';
const config = require(__dirname + '/../configs/' + env);

console.log(env);

module.exports = config;
