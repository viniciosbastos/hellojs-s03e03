const knex = require('./db')

if (!process.argv[2]) {
    console.log('usage: node hello-knex-2 <nome>')
    process.exit(0)
}

knex('convidado').insert({
    nomeconvidado: process.argv[2]
}, 'idconvidado').then((ret) => {
    console.log(`Convidado inserido com a chave ${ret[0]}`)
    process.exit(0)
}).catch((err) => {
    console.log(err)
    process.exit(1)
})