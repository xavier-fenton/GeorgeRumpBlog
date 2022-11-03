/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('posts').del()
  await knex('posts').insert([
    { id: 1, post: 'What up world!' },
    { id: 2, post: 'Hey' },
    { id: 3, post: 'What is going on' },
  ])
}
