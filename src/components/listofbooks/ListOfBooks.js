import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBooks } from '../../redux/books/booksArrSlice';
import OneBook from './OneBook';

const ListOfBooks = () => {
  const dispatch = useDispatch();

  const { books, isLoading } = useSelector((store) => store.booksArr);
  useEffect(() => {
    dispatch(getBooks());
    console.log('hi');
  }, [dispatch]);

  const booksArray = Object.entries(books).reduce((acc, [id, bookList]) => {
    const booksWithId = bookList.map((book) => ({ ...book, id }));
    return [...acc, ...booksWithId];
  }, []);

  return (
    <>
      {isLoading ? (
        <div>loading ...</div>
      ) : (
        booksArray.map((book) => <OneBook key={book.id} book={book} />)
      )}
    </>
  );
};

export default ListOfBooks;
