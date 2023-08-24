import React from 'react';
import ReactDOM from 'react-dom/client';
import books from './books';
import Book from './Book';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

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

root.render(<BookList />);
