import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

const author = 'Rebecca Yarros';
const title = 'Iron Flame (The Empyrean, 2)';
const img =
  'https://images-na.ssl-images-amazon.com/images/I/A1FW1G46+aL._AC_UL900_SR900,600_.jpg';

const firstBook = {
  author: 'James Clear',
  title: 'test title',
  img: 'https://images-na.ssl-images-amazon.com/images/I/81hHy5XrdKL._AC_UL900_SR900,600_.jpg',
};

const secondBook = {
  author: 'Rebecca Yarros',
  title: 'Iron Flame (The Empyrean, 2)',
  img: 'https://images-na.ssl-images-amazon.com/images/I/A1FW1G46+aL._AC_UL900_SR900,600_.jpg',
};
const BookList = () => {
  return (
    <section className='list'>
      <Book
        author={firstBook.author}
        title={firstBook.title}
        img={firstBook.img}
      />
      <Book
        author={secondBook.author}
        title={secondBook.title}
        img={secondBook.img}
      />
    </section>
  );
};

const Book = (props) => {
  const { author, title, img } = props;
  return (
    <article className='book'>
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
    </article>
  );
};

root.render(<BookList />);
