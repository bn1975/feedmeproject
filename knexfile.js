module.exports = {
  // DB Config for development mode

  // OUR LOCAL SETUP FOR OUR DB
  development: {
    client: 'pg',
    connection:'postgres://kwwoyjdeeedhff:7618ecd5660020d7f68a664f4ec702b7d394f4f8d912df78d352cfe9c1913ea0@ec2-107-21-236-219.compute-1.amazonaws.com:5432/d5pk1f7mere4ov'
  },
  // OUR PRODUCTION/LIVE SETUP
  production: {}
}
