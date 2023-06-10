import Author from '../utils/Author';
import Button from '../utils/Buttons';
import Input from '../utils/Input';

const AddNewBook = () => (
  <>
    <div className="Add">
      <div className="title">
        <h2>Add New Book</h2>
      </div>
      <div className="d-flex body">
        <Input />
        <Author />
        <div className="button">
          <Button buttonName="add book" />
        </div>
      </div>
    </div>
  </>
);
export default AddNewBook;
