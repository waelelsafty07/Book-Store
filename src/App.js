import { Route, Routes } from 'react-router-dom';
import './App.css';
import Categories from './routes/Categories';
import Home from './routes/Home';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/categories" element={<Categories />} />
    </Routes>
  );
}

export default App;
