const bookService = require('../services/books'),
  errors = require('../errors');

exports.getAll = (req, res, next) => {
  bookService
    .getAll()
    .then(books => {
      res.status(200);
      res.send({ books });
    })
    .catch(next);
};

exports.getById = (req, res, next) => {
  bookService
    .getById(req.params.id)
    .then(book => {
      if (book) {
        res.status(200);
        res.send(book);
      } else {
        next(errors.bookNotFound);
      }
    })
    .catch(next);
};
