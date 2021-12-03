import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Favourites from './routes/favourites';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/index.js';
import ErrorComponent from './components/ErrorComponent';
import DetailPage from './routes/detailPage';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/favourites' element={<Favourites />} />
        <Route path='/:imdbID' element={<DetailPage />} />
        <Route path='*' element={<ErrorComponent />} />
      </Routes>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
