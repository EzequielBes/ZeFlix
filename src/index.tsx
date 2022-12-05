import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { MovieContext } from './context/movieContext';
import {BrowserRouter} from 'react-router-dom'


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <MovieContext>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </MovieContext>
  </React.StrictMode>
);

