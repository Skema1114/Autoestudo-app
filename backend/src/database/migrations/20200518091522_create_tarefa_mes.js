
exports.up = function(knex) {
  return knex.schema.createTable('tarefa_mes', function (table) {
      table.increments();

      table.string('id_mes').notNullable();
      table.foreign('id_mes').references('id').inTable('mes');
      
      table.string('id_tarefa').notNullable();
      table.foreign('id_tarefa').references('id').inTable('tarefa');

      table.string('id_usuario').notNullable();
      table.foreign('id_usuario').references('id').inTable('usuario');

      table.string('data_cadastro').notNullable();

      table.string('bloq');
      
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('tarefa_mes');
};