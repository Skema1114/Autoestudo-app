
exports.up = function(knex) {
  return knex.schema.createTable('mes', function (table) {
      table.increments();
      
      table.string('id_usuario').notNullable();
      table.foreign('id_usuario').references('id').inTable('usuario');

      table.string('mes').notNullable();
      table.string('ano').notNullable();
      table.string('qtd_nao').notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('mes');
};
