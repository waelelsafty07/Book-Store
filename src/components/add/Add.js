import Button from '../utils/Buttons';
import Input from '../utils/Input';

const AddNewBook = () => (
  <>
    <div className="Add">
      <div className="title">
        <h2>Add New Book</h2>
      </div>
      <div className="d-flex body">
        <div className="form-control text">
          <Input name="Add Title" />
        </div>
        <div className="form-control author">
          <Input name="Author" />
        </div>
        <div className="button">
          <Button buttonName="add book" />
        </div>
      </div>
    </div>
  </>
);
export default AddNewBook;
