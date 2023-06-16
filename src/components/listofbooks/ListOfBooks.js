import { useSelector } from 'react-redux';
import OneBook from './OneBook';

const ListOfBooks = () => {
  const { bookItem } = useSelector((store) => store.booksArr);
  return (
    <>
      {bookItem.map((book) => (
        <OneBook key={book.id} book={book} />
      ))}
    </>
  );
};

export default ListOfBooks;
