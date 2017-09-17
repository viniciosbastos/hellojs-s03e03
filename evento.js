const knexfile = require('./knexfile')['development']
const knex = require('knex')(knexfile)

knex.schema.createTable('evento', (table) => {
    table.increments('id')
    table.string('descricao')
    table.date('dt_inicio')
}).then(() => {
    console.log('Tabela de eventos criada com sucesso.')
    process.exit(0)
}).catch((err) => {
    console.log(err)
    process.exit(1)
})