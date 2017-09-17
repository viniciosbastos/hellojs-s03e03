const knex = require('./db')

if (!process.argv[2]) {
    console.log('usage: node hello-knex-5.js <id>')
}

knex('convidado').select().where({
    idconvidado: process.argv[2]
}).then((ret) => {
    console.log('id\t\tnome')

    let i = ret.length
    while (i--) {
        let convidado = ret[i]
        console.log(`${convidado.idconvidado}\t\t${convidado.nomeconvidado}`)
    }
    process.exit(0)
}).catch((err) => {
    console.log(err)
    process.exit(1)
})