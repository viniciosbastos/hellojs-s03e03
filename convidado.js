const knex = require('./db')

knex.schema.createTable('convidado', (table) => {
    table.increments('idconvidado')
    table.string('nomeconvidado')
}).then(() => {
    console.log('Tabela criada com sucesso')
    process.exit(0)
}).catch((err) => {
    console.log(err)
    process.exit(1)
})