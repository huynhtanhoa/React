import React from 'react';
import './index.css';
import ReactDOM from 'react-dom/client';

const books = [
    {
        author: "Vivek Ramaswamy",
        title: "Truths: The Future of America First",
        img: "./images/book-1.jpg",
        id: 1,
    },
    {
        author: " Casey Means MD (",
        title: "Good Energy: The Surprising Connection Between Metabolism and Limitless Health ",
        img: "./images/book-2.jpg",
        id: 2,
    }
];


function BookList() {
    return (
        <section className="booklist">
            {books.map((book) => {
                const {img, title,author, id} = book
                return(
                    <Book img={img} title={title} author={author} key={id}/>
                );
            })}

        </section>
    );
}

function Book(props) {
    console.log(props);
    // const { img, title, author } = props;
    return (
        <article className="book">
            <img src={props.img} alt={props.title}/>
            <h2>{props.title}</h2>
            <h4>{props.author}</h4>
        </article>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BookList/>);