import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getBooks, postBook } from '../../redux/books/booksArrSlice';
import Button from '../utils/Buttons';
import Input from '../utils/Input';

const AddNewBook = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const onChangeTitle = (e) => setTitle(e.target.value);
  const onChangeAuthor = (e) => setAuthor(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !author) return;
    try {
      await dispatch(postBook([title, author]));
      dispatch(getBooks());
      setTitle('');
      setAuthor('');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="Add">
      <div className="title">
        <h2>Add New Book</h2>
      </div>
      <div className="d-flex body">
        <div className="form-control text">
          <Input name="Add Title" value={title} onChange={onChangeTitle} />
        </div>
        <div className="form-control author">
          <Input name="Author" value={author} onChange={onChangeAuthor} />
        </div>
        <div className="button">
          <Button handleSubmit={handleSubmit} buttonName="add book" />
        </div>
      </div>
    </div>
  );
};
export default AddNewBook;
