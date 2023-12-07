import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {addTodo, getTodos} from "./redux/todoAction/todoAction";

const App = () => {
    const dispatch = useDispatch();
    const todos = useSelector(s => s.todos);
    const [newTodo, setNewTodo] = useState('');
    const [deleteTodo, setDeleteTodo] = useState(null);

    useEffect(() => {
        dispatch(getTodos())
    }, []);

    const handleAddTodo = () => {
        const obj = {
            title: newTodo,
            "completed": false,
            "createdAt": +new Date(),
            "competedAt": null
        }
        setNewTodo('')
        dispatch(addTodo(obj))
    }

    const handleDeleteTodo = (id) => {
        setDeleteTodo(id)
    }

    return (
        <div>
            <input type="text"
                   onChange={e =>
                       setNewTodo(e.target.value)}/>
            <button onClick={handleAddTodo}>Add</button>
            {
                todos.map(todo => (
                    <div key={todo.id}>
                        <h2>{todo.title}</h2>
                        <input type="checkbox" checked={todo.completed} />
                        <button onClick={() => handleDeleteTodo(todo.id)}>Delete</ button>
                    </div>
                ))
            }
        </div>
    );
};

export default App;