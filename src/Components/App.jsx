import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Todo1 from './Todo1';
import { BrowserRouter as Router, Switch, Route, useParams } from 'react-router-dom';

function App() {

    const [todos, setTodos] = useState([]);
    // const { todoId } = useParams();

    useEffect(() => {
        // console.log('Start');
        axios.get('https://jsonplaceholder.typicode.com/todos/')
            // axios.get('https://jsonplaceholder.typicode.com/todos/1')
            // axios.get('https://jsonplaceholder.typicode.com/todos/2')
            .then(function (response) {
                console.log(response.data);
                setTodos(response.data);
            })
    }, []);

    const sniuriukasTodui = (id) => {
        const todosCopy = todos.slice();
        for (let i = 0; i < todosCopy.length; i++) {
            if (id === todosCopy[i].id) {
                todosCopy[i].completed = !todosCopy[i].completed
                break;
            }
        }
        // console.log(id);
        setTodos(todosCopy);
    }

    return (
        <Router>
            <Switch>

                <Route path={'/:todoId'}>
                    <div className="todo-container">
                        <Todo1 data={todos[todoId - 1]} sniuriukas={sniuriukasTodui}></Todo1>
                    </div>
                </Route>

                <Route path='/'>
                    <div className="todo-container">
                        {todos.map((todo) => (<Todo1 key={todo.id} data={todo} sniuriukas={sniuriukasTodui}></Todo1>))}
                    </div>
                </Route>
            </Switch>
        </Router>
    )
}

export default App;