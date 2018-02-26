module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/bowlingbackend'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
};
