//representasikan sebagai database
const books = [
    {id:1, title: 'node js', description: 'learning node js for beginner'},
    {id:2, title: 'python', description: 'learning python for beginner'},
    {id:3, title: 'php', description: 'learning php for beginner'},
    {id:4, title: 'ruby', description: 'learning ruby for beginner'}
]

const findAllBooks = (req, res) =>{
    // mendapatkan data dari database
    const data = books

    // memberikan response berupa json
    const result = {
        status: 'ok',
        data: data
    }

    res.json(result)
}

const getBookById = (req, res) =>{
    // mendapatkan req params nya
    const { id } = req.params
    let book
    // proses loop data books
    for (let i = 0; i < books.length; i++){
        // apabila data book id sama dengan id yang ada di req.params, maka dia akan menggunakan data tersebut
        if(books[i].id === Number(id)){
            book = books[i]
        }
    }

    if(book === undefined){
        return res.status(404).json({
            status: 'failed', massage: `data book with id ${id} is not found`
        })
    }

    // mengembalikan response ke clien
    res.json({
        status: 'ok', data: book
    })
}

const createNewBook = (req, res) =>{
    // Mendapatkan request body
    const { title, description } = req.body;

    // Mendapatkan new id
    const lastItemBookId = books[books.length - 1].id;
    const newIdBook = lastItemBookId + 1
    // Menambahkan buku
    const newBookData = {id: newIdBook, title: title, description: description}
    books.push(newBookData)

    // Mengembalikan response ke client
    res.status(201).json({ status: 'ok', massage: `Success create new book`, data: newBookData})
}

module.exports = {findAllBooks, getBookById, createNewBook}