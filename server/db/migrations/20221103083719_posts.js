exports.up = function (knex) {
  return knex.schema.createTable('posts', (table) => {
    table.increments('id')
    table.timestamp('created_at')
    table.string('post')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('posts')
}
