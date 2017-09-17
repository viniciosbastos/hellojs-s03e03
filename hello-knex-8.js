const knexfile = require('./knexfile')['development']
const knex = require('knex')(knexfile)

if (!process.argv[3]) {
    console.log('usage: node hello-knex-8.js <nome> <raca>')
}

let nome = process.argv[2]
let raca = process.argv[3]

knex('cachorro').insert({
    nomecachorro: nome,
    racacachorro: raca
}, 'idcachorro').then((ret) => {
    console.log(`Cachorro inserido com o id ${ret[0]}`)
    process.exit(0)
}).catch((err) => {
    console.log(err)
    process.exit(1)    
})