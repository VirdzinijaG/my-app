import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Book from './Book';
import '../books.css';
import Sort from './Sort';

function App() {
    const [books, setBooks] = useState([]);
    const [cats, setCats] = useState([]);

    useEffect(() => {
        const bookCats = JSON.parse(localStorage.getItem('cats'))
        if (bookCats !== null) {
            setCats(bookCats);
            return;
        }


        axios.get('https://in3.dev/knygos/types/')
            .then(function (response) {
                console.log(response.data);
                setCats(response.data);
                localStorage.setItem('cats', JSON.stringify(response.data))
            })
    }, []);

    useEffect(() => {
        axios.get('https://in3.dev/knygos/')
            .then(function (response) {
                console.log(response.data);
                const books = response.data;
                books.sort((a, b) => {
                    if (a.title > b.title) {
                        return 1;
                    }
                    else if (a.title < b.title) {
                        return -1
                    }
                    else {
                        return 0
                    }
                })
                // setBooks(response.data);
                setBooks(books)
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

    const makeSort = (dir) => {
        console.log(dir);
        const booksCopy = books.slice()
        if (dir === 'priceDesc') {
            booksCopy.sort((a, b) => a.price - b.price);
            setBooks(booksCopy)
        }
        else if (dir === 'priceAsc') {
            booksCopy.sort((a, b) => b.price - a.price);
            setBooks(booksCopy)
        }
        else if (dir === 'priceAsc') {
            booksCopy.sort((a, b) => b.price - a.price);
            setBooks(booksCopy)
        }
        else if (dir === 'titleAsc') {
            booksCopy.sort((a, b) => {
                if (a.title > b.title) {
                    return 1;
                }
                else if (a.title < b.title) {
                    return -1;
                }
                else {
                    return 0;
                }
            });
            setBooks(booksCopy);
        }
        else if (dir === 'titleDesc') {
            booksCopy.sort((a, b) => {
                if (a.title > b.title) {
                    return -1;
                }
                else if (a.title < b.title) {
                    return 1;
                }
                else {
                    return 0;
                }
            });
            setBooks(booksCopy);
        }
    }

    const getCat = (id) => {
        for (let i = 0; i < cats.length; i++) {
            if (id === cats[i].id) {
                return cats[i].title;
            }
        }
        return '';
    }



    return (
        <>
            <h1>Knygų sąrašas</h1>
            <Sort makeSort={makeSort}></Sort>
            <div className="book-container">
                {books.map((book) => (<Book key={book.id} cat={getCat(book.id)} data={book} delete={sniuriukasBook}></Book>))}
            </div>
        </>
    )
}


export default App;