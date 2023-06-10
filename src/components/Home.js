import AddNewBook from './add/Add';
import ListOfBooks from './listofbooks/ListOfBooks';

const Home = () => (
  <>
    <div className="listBooks">
      <ListOfBooks />
    </div>
    <AddNewBook />
  </>
);

export default Home;
