import './App.css';
import Home from './pages/Home';

import {BrowserRouter, Routes, Route} from 'react-router-dom';
import DetailPortfolio from './pages/DetailPortfolio';
import PageNotFound from './pages/PageNotFound';

function App() {
  return (
    // <Home />
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/portfolio/:id' element={<DetailPortfolio />} />
      <Route path='/page-not-found' element={<PageNotFound />} />
      <Route path='*' element={<PageNotFound />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
