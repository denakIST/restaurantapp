/*
module.exports = ({ env }) => ({
  //proxy: true,
  //host: "0.0.0.0",
  port: process.env.PORT,
  url: env('MY_HEROKU_URL'),
  app: { 
    keys: env.array('APP_KEYS')
  },
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET'),
    },
  },
})*/


/**based on the blog post at https://strapi.io/blog/nextjs-react-hooks-strapi-deploy */

module.exports = ({ env }) => ({
      url: env("https://restaurant-strapi-backend-a65b98f32151.herokuapp.com/"),
      proxy: true,
      app: {
        keys: env.array("APP_KEYS", ["testKey1", "testKey2"]),
      },
    });


/**then run
 * 
 * heroku config:set APP_KEYS=$(openssl rand -base64 32)
    heroku config:set API_TOKEN_SALT=$(openssl rand -base64 32)
    heroku config:set ADMIN_JWT_SECRET=$(openssl rand -base64 32)
    heroku config:set JWT_SECRET=$(openssl rand -base64 32)
 */
