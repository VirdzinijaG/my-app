import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Book from './Book';

function App() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        axios.get('https://in3.dev/knygos/')
            .then(function (response) {
                console.log(response.data);
                setBooks(response.data);
            })
    }, []);



    return (
        <div className="book-container">
            {books.map((book) => (<Book key={book.id} data={book}></Book>))}
        </div>
    )
}


export default App;