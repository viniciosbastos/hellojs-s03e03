
exports.up = function(knex, Promise) {
    return knex('cachorro').insert([{
        nomecachorro: 'toto1',
        racacachorro: 'york'
    }, {
        nomecachorro: 'toto2',
        racacachorro: 'popcorn'
    }
    ])
};

exports.down = function(knex, Promise) {
    return knex('cachorro').where({nomecachorro: 'toto1'}).del().then(() => {
        return knex('cachorro').where({ nomecachorro: 'toto2' }).del()
    })
};
