import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Book from './Book';
import '../books.css';

function App() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        axios.get('https://in3.dev/knygos/')
            .then(function (response) {
                console.log(response.data);
                setBooks(response.data);
            })
    }, []);

    const sniuriukasBook = (id) => {
        const booksCopy = books.slice();
        for (let i = 0; i < booksCopy.length; i++) {
            if (booksCopy[i].id == id) {
                booksCopy.splice(i, 1);
                break;
            }
        }
        setBooks(booksCopy);
    }


    return (
        <div className="book-container">
            <h1>Knygų sąrašas</h1>
            {books.map((book) => (<Book key={book.id} data={book} delete={sniuriukasBook}></Book>))}
        </div>
    )
}


export default App;