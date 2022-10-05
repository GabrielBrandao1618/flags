import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import { Home } from './pages/Home';
import { Quiz } from './pages/Quiz';
import { apolloClient } from './lib/apollo';

export default function (){
  return (
    <ApolloProvider client={apolloClient}>
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
    </ApolloProvider>
  );
}