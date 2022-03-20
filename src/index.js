import { render } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
  <App/> 
  </BrowserRouter>,
 
  document.getElementById('root')
);

export default render