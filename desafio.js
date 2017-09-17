const knexfile = require('./knexfile')['development']
const knex = require('knex')(knexfile)
const axios = require("axios")

const api = axios.create({
  baseURL: "https://api.github.com"
})

api.get("/repos/seita-ifce/hello-js-v3/issues/3/comments").then(ret => {
    let commentsList = ret.data.filter(comment => new Date(comment.created_at) <= new Date('2017-09-18T23:59:59'))
    commentsList.forEach(e => {
        if (e.body.trim().startsWith('https://github.com/')) {
            knex('presenca').select().where({
                usuario: e.user.login
            }).then((ret) => {
                if (ret.length == 0) {
                    knex('presenca').insert({
                        usuario: e.user.login,
                        repo: e.body.trim(),
                        episodio: 'e03',
                        date: new Date(e.created_at)
                    }).then(() => {
                        console.log(`${e.user.login} completou o desafio.`)
                        process.exit(1)
                    }).catch((err) => {
                        console.log(err)
                        process.exit(0)
                    })
                } else {
                    process.exit(1)
                }
            }).catch((err) => {
                console.log(err)
                process.exit(0)
    })
        }
    });
})

