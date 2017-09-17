
exports.up = function(knex, Promise) {
    return knex.schema.createTableIfNotExists('cachorro', (table) => {
        table.increments('idcachorro')
        table.string('nomecachorro')
        table.string('racacachorro')
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('cachorro')
};
