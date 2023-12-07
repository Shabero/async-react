import axios from 'axios';
import {ADD_TODO, GET_TODOS} from "../type";
export const getTodos = () => {
    return (dispatch) => {
        axios('https://65642481ceac41c0761d7eb6.mockapi.io/todo')
            .then(({data}) => {
                dispatch({type: GET_TODOS, payload: data})
            })
    }
}

export const addTodo = (todo) => {
    return (dispatch) => {
        axios.post('https://65642481ceac41c0761d7eb6.mockapi.io/todo', todo)
           .then(({data}) => {
                 dispatch({type: ADD_TODO, payload: data})
             })
    }
}

export const deleteTodo = (id) => {
    return (dispatch) => {
        axios.delete(`https://65642481ceac41c0761d7eb6.mockapi.io/todo/${id}`)
          .then(({data}) => {
                 dispatch({type: DELETE_TODO, payload: data})
             })
    }
}