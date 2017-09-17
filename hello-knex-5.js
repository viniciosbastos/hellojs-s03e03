const knex = require('./db')

knex('convidado').select().then((ret) => {
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