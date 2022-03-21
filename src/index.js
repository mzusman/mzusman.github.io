import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { StyledEngineProvider } from '@mui/material/styles';
import Store from './components/Store'
import { Provider } from 'react-redux';

ReactDOM.render(
  <Provider store={Store}>
    <StyledEngineProvider>
      <App />
    </StyledEngineProvider>
  </Provider>
  , document.getElementById('root'));
