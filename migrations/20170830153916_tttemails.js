
exports.up = function(knex, Promise) {
  return knex.schema.createTable('tttemails',function(table){
    table.increments();
    table.string('full_name')
    table.string('email')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('tttemails')
};
