const { findAllBooks, getBookById, createNewBook } = require('../controller/booksController')

const router = require('express').Router()

router.get('/books', findAllBooks)

router.get('/books/:id', getBookById)

router.post('/books', createNewBook)

module.exports = router