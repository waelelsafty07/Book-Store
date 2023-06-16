import { useDispatch } from 'react-redux';
import { deleteBook, getBooks } from '../../redux/books/booksArrSlice';
import Button from '../utils/Buttons';

const OneBook = ({ book }) => {
  const dispatch = useDispatch();
  const handleDeleteBook = async () => {
    try {
      await dispatch(deleteBook(book.id));
      dispatch(getBooks());
    } catch (error) {
      console.log(error);
    }
  };

  const clipStyle = {
    clip: `rect(0, ${(65 * 60) / 100}px, 60px, 0)`,
  };
  return (
    <div className="d-flex card-book">
      <div className="d-flex details-book">
        <div className="data-of-book">
          <div className="type">{book.category}</div>
          <div className="title">{book.title}</div>
          <div className="author lightblue">{book.author}</div>
          <div className="actions lightblue">
            <ul className="d-flex liststyle">
              <li>comments</li>
              <li>
                <button type="button" onClick={() => handleDeleteBook()}>
                  Remove
                </button>
              </li>
              <li>Edit</li>
            </ul>
          </div>
        </div>
        <div className="d-flex align-center complete">
          <div className="progress-bar">
            <div className="progress-icon" style={clipStyle} />
            <div className="inner-circle" />
          </div>
          <div className="percent">
            <div className="percent-completed">
              65
              <span>%</span>
            </div>
            <div className="completed">completed</div>
          </div>
        </div>
      </div>
      <div className="progress">
        <div className="title">Current Chapter</div>
        <div className="chapter">Chapter 17</div>
        <Button buttonName="UPDATE PROGRESS" />
      </div>
    </div>
  );
};

export default OneBook;
