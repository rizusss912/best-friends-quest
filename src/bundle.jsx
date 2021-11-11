import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Client } from './client';

Client.contextType = React.createContext(JSON.parse(window.context));

ReactDOM.render(
  <BrowserRouter>
    <Client />
  </BrowserRouter>,
  document.getElementById('app'),
);