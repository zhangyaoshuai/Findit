module.exports = {
  env: {
      port: 3000,
  },
  pg: {
      host: 'linkedhome.xyz',
      port: '5457',
      pool: {
          max: 5,
          min: 0,
          acquire: 30000,
          idle: 10000,
      },
  },
};
