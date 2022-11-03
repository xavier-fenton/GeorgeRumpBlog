exports.up = function (knex) {
  return knex.schema.createTable('posts', (table) => {
    table.increments('id')
    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.string('post')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('posts')
}
