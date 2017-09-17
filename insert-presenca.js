const knexfile = require('./knexfile')['development']
const knex = require('knex')(knexfile)

knex('presenca').insert({
    usuario: 'Teste',
    repo: '',
    date: new Date(),
    episodio: 'e03'
}, 'id').then((ret) => {
    console.log(`Presenca com id ${ret[0]} inserida`)
    process.exit(0)
}).catch((err) => {
    console.log(1)
    process.exit(1)
})