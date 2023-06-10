import { v4 as uuidv4 } from 'uuid';
import OneBook from './OneBook';

const listOfBooks = [
  {
    id: uuidv4(),
    percent: 65,
  },
];

const ListOfBooks = () => (
  <>
    {listOfBooks.map((book) => (
      <OneBook key={book.id} book={book} />
    ))}
  </>
);

export default ListOfBooks;
