import axios from 'axios'

export const loadBooks = async() => {
    let response = await axios.get('http://bootcamp.opole.pl/books/my-books/mx5t')
    return response.data.books
}