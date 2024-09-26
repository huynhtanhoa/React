import React from 'react';
import './index.css';
import ReactDOM from 'react-dom/client';

function BookList(){
    return (
        <section className="booklist">
            <Book />
            <Book />
            <Book />
            <Book />
        </section>
    );
}

function Book(){
    return (
        <article className="book">
            <Image />
            <Title />
            <Author />
        </article>
    );
}

const Image = () => <img src="https://images-na.ssl-images-amazon.com/images/I/71wyLqCorxL._AC_UL900_SR900,600_.jpg"
                         alt="Truths: The Future of America First"/>
const Title = () => {
    return <h2>Truths: The Future of America First</h2>
}
const Author = () => <h4>Vivek Ramaswamy</h4>

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BookList />);