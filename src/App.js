import { Provider } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import store from './redux/store';
import Categories from './routes/Categories';
import HomeRoute from './routes/Home';

function App() {
  return (
    <>
      <Provider store={store}>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomeRoute />} />
          <Route path="/categories" element={<Categories />} />
        </Routes>
      </Provider>
    </>
  );
}

export default App;
