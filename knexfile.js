module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/tiptotoe'
  },
  production: {
    client: 'pg',
    connection: {
      database:'postgres://eqaxxqsmbavpal:41cc04a94c25e2c958922ebdbd6efe477ed52df3ea2527d41acf033fb6c7a158@ec2-54-163-233-201.compute-1.amazonaws.com:5432/d33sqlagfcs7hs',
      user:     'username',
      password: 'password'
    }
  }
}
