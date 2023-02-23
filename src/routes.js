const { AddBook, GetAllBook, GetBookById, EditBookById, DeleteBookById } = require('./handler')

const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: AddBook
  },

  {
    method: 'GET',
    path: '/books',
    handler: GetAllBook
  },

  {
    method: 'GET',
    path: '/books/{bookId}',
    handler: GetBookById
  },

  {
    method: 'PUT',
    path: '/books/{bookId}',
    handler: EditBookById
  },

  {
    method: 'DELETE',
    path: '/books/{bookId}',
    handler: DeleteBookById
  }
]

module.exports = routes
