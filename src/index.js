import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter} from 'react-router-dom';
import { GlobalProvider } from './GlobalState'
import { initialState } from './reducer';



ReactDOM.render(
  <GlobalProvider>
     <BrowserRouter>
       <App />
     </BrowserRouter>
  </GlobalProvider>,
  document.getElementById('root')
);

