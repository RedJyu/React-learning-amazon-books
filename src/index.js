import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

const author = 'Rebecca Yarros';
const title = 'Iron Flame (The Empyrean, 2)';
const img =
  'https://images-na.ssl-images-amazon.com/images/I/A1FW1G46+aL._AC_UL900_SR900,600_.jpg';
const books = [
  {
    author: 'James Clear',
    title: 'test title',
    img: 'https://images-na.ssl-images-amazon.com/images/I/81hHy5XrdKL._AC_UL900_SR900,600_.jpg',
  },
  {
    author: 'Rebecca Yarros',
    title: 'Iron Flame (The Empyrean, 2)',
    img: 'https://images-na.ssl-images-amazon.com/images/I/A1FW1G46+aL._AC_UL900_SR900,600_.jpg',
  },
];

// const names = ['john', 'pete', 'anna'];
// const newNames = names.map((name) => {
//   return <h1>{name}</h1>;
// });

const BookList = () => {
  return (
    <section className='list'>
      {books.map((book) => {
        const { author, title, imf } = book;
        return <Book {...book} />;
      })}
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
