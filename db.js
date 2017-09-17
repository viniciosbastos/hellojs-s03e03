const knex = require('knex')({
    client: 'sqlite3',
    connection: {
        filename: './hello.sqlite3'
    },
    useNullAsDefault: true
})

module.exports = knex