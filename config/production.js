module.exports = {
  title: 'mailtrain',
  log: {
    level: 'verbose'
  },
  www: {
    port: process.env.PORT || 5000,
    host: '0.0.0.0',
    secret: process.env.SESSION_SECRET || 'a cat',
    remember: process.env.SESSION_LENGTH || 2592000,
    log: 'dev',
    proxy: false,
    postsize: process.env.POSTSIZE || '2MB'
  },
  mysql: `${process.env.JAWSDB_MARIA_URL}?charset=utf8mb4`,
  redis: process.env.REDIS_URL,
  verp: {
    enabled: false
  }
}
