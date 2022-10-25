// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: 'Marcy-Merch',
      user:     'postgres',
      password: ''
    }
  },


  production: {
    client: 'pg',
    connection: {
      database: 'Marcy-Merch',
      user:     'postgres',
      password: ''
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
