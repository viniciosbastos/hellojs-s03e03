const knexfile = require('./knexfile')['development']
const knex = require('knex')(knexfile)

if (!process.argv[3]) {
    console.log('usage: node hello-knex-8.js <nome> <raca>')
}

let nome = process.argv[2]
let raca = process.argv[3]

const q = "insert into cachorro (nomecachorro, racacachorro) values (:nome, :raca)"
const p = {
    nome: nome,
    raca: raca
}

knex.raw(q, p).then(() => {
    console.log(`Cachorro inserido`)
    process.exit(0)
 }).catch((err) => {
    console.log(err)
    process.exit(1)    
})
