import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

const books = [
  {
    author: 'James Clear',
    title: 'test title',
    img: 'https://images-na.ssl-images-amazon.com/images/I/81hHy5XrdKL._AC_UL900_SR900,600_.jpg',
    id: 1,
  },
  {
    author: 'Rebecca Yarros',
    title: 'Iron Flame (The Empyrean, 2)',
    img: 'https://images-na.ssl-images-amazon.com/images/I/A1FW1G46+aL._AC_UL900_SR900,600_.jpg',
    id: 2,
  },
];

// const names = ['john', 'pete', 'anna'];
// const newNames = names.map((name) => {
//   return <h1>{name}</h1>;
// });

const BookList = () => {
  const getBook = (id) => {
    const book = books.find((book) => book.id === id);
    console.log(book);
  };

  return (
    <section className='list'>
      {/* <EventExamples /> */}
      {books.map((book) => {
        return <Book {...book} key={book.id} getBook={getBook} />;
      })}
    </section>
  );
};
// const EventExamples = () => {
//   const handleFormInput = (e) => {
//     console.log(e.target.value);
//     console.log('form input');
//   };
//   const handleButton = () => {
//     alert('button click');
//   };
//   const handleSubmission = (e) => {
//     e.preventDefault();
//     console.log('submitted');
//   };
//   return (
//     <section>
//       <form onSubmit={handleSubmission}>
//         <h2>form</h2>
//         <input
//           type='text'
//           name='example'
//           onChange={handleFormInput}
//           style={{ margin: '1rem 0' }}
//         />
//       </form>
//       <button onClick={handleButton}>click me</button>
//     </section>
//   );
// };
const Book = (props) => {
  const { author, title, img, getBook, id } = props;
  // const getSingleBook = () => {
  //   getBook(id);
  // };
  return (
    <article className='book'>
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
      <button onClick={() => getBook(id)}>click</button>
    </article>
  );
};

root.render(<BookList />);
