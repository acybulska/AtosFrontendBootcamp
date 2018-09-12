import axios from 'axios'

export const loadTodos = async() => {
    let response = await axios.get('/todos.json')
    return response.data.todos
}