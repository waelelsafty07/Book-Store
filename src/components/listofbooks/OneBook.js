import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { removeBook } from '../../redux/books/booksArrSlice';
import Button from '../utils/Buttons';

const OneBook = ({ book }) => {
  const [progress, setProgress] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    const bar = (Number(book.percent) * 60) / 100;
    setProgress(bar);
  }, [book.percent]);

  const clipStyle = {
    clip: `rect(0, ${progress}px, 60px, 0)`,
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
                <button
                  type="button"
                  onClick={() => dispatch(removeBook(book.id))}
                >
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
              {(progress * 100) / 60}
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
