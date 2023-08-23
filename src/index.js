import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

const author = 'Rebecca Yarros';
const title = 'Iron Flame (The Empyrean, 2)';
const img =
  'https://images-na.ssl-images-amazon.com/images/I/A1FW1G46+aL._AC_UL900_SR900,600_.jpg';

const BookList = () => {
  return (
    <section className='list'>
      <Book author={author} title={title} img={img} />
      <Book author={author} title={title} img={img} />
    </section>
  );
};

const Book = (props) => {
  console.log(props);
  return (
    <article className='book'>
      <img src={props.img} alt={props.title} />
      <h2>{props.title}</h2>
      <h4>{props.author}</h4>
    </article>
  );
};

root.render(<BookList />);
