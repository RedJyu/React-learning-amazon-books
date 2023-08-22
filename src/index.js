import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

const BookList = () => {
  return (
    <section className='list'>
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
};

const Book = () => {
  return (
    <article className='book'>
      <Image />
      <Title />
      <Author />
    </article>
  );
};

const Image = () => (
  <img
    src='https://images-na.ssl-images-amazon.com/images/I/A1FW1G46+aL._AC_UL900_SR900,600_.jpg'
    alt='Iron Flame (The Empyrean, 2)'
  />
);
const Title = () => {
  return <h2>Iron Flame (The Empyrean, 2)</h2>;
};
const Author = () => {
  const inLineStyle = {
    color: '#617d98',
    fontSize: '0.75rem',
    marginTop: '0.5rem',
  };
  return <h4 style={inLineStyle}>Rebecca Yarros</h4>;
};

root.render(<BookList />);
