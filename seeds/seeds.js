
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('users').del(),
    knex('posts').del(),
    knex('comments').del(),
    knex('categories').del(),
    knex('category_posts').del(),

    // Inserts seed entries
    knex('categories').insert({id: 1, technology: 'html'}),
    knex('categories').insert({id: 2, technology: 'css'}),
    knex('categories').insert({id: 3, technology: 'javascript'}),
    knex('categories').insert({id: 4, technology: 'react'}),
    knex('categories').insert({id: 5, technology: 'jQuery'}),
    knex('categories').insert({id: 6, technology: 'express'}),
    knex('categories').insert({id: 7, technology: 'jade'})
  );
};
