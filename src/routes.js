const {
  AddBook,
  GetAllBook,
  GetBookById,
  EditBookById,
  DeleteBookById,
} = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: AddBook,
  },

  {
    method: 'GET',
    path: '/books',
    handler: GetAllBook,
  },

  {
    method: 'GET',
    path: '/books/{id}',
    handler: GetBookById,
  },

  {
    method: 'PUT',
    path: '/books/{id}',
    handler: EditBookById,
  },

  {
    method: 'DELETE',
    path: '/books/{id}',
    handler: DeleteBookById,
  },
];

module.exports = routes;
