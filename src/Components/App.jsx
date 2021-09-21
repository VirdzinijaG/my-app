import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
    useEffect(() => {
        console.log('Start');
        axios.get('https://jsonplaceholder.typicode.com/todos/')
            // axios.get('https://jsonplaceholder.typicode.com/todos/1')
            // axios.get('https://jsonplaceholder.typicode.com/todos/2')
            .then(function (response) {
                console.log(response.data);
            })
    }, [])
    return (
        <>
            Labas
        </>
    )
}

export default App;