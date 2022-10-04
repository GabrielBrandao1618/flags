import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { Home } from './pages/Home';
import { Quiz } from './pages/Quiz';

export default function (){
  return (
    <BrowserRouter>
      <Routes>
        <Route 
          path='/'
          element={<Home />}
        />
        <Route 
          path='/play'
          element={<Quiz />}
        />
      </Routes>
    </BrowserRouter>
  );
}