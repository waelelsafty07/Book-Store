import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../../redux/books/booksArrSlice';
import Button from '../utils/Buttons';
import Input from '../utils/Input';

const AddNewBook = () => {
  const dispatch = useDispatch();
  const titleRef = useRef(null);
  const authorRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const title = titleRef.current?.value;
    const author = authorRef.current?.value;
    if (!title || !author) return;
    dispatch(addBook([title, author]));
  };

  return (
    <div className="Add">
      <div className="title">
        <h2>Add New Book</h2>
      </div>
      <div className="d-flex body">
        <div className="form-control text">
          <Input name="Add Title" ref={titleRef} />
        </div>
        <div className="form-control author">
          <Input name="Author" ref={authorRef} />
        </div>
        <div className="button">
          <Button handleSubmit={handleSubmit} buttonName="add book" />
        </div>
      </div>
    </div>
  );
};
export default AddNewBook;
