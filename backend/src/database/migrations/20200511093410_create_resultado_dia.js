
exports.up = function(knex) {
  return knex.schema.createTable('resultado_dia', function (table) {
      table.increments();

      table.string('id_usuario').notNullable();
      table.foreign('id_usuario').references('id').inTable('usuario');

      table.string('resultado').notNullable();
      table.string('data').notNullable();
      table.string('qtd_nao').notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('resultado_dia');
};