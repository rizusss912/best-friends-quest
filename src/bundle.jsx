import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Client } from './client';

const serverConteext = JSON.parse(window.context);
const clientContext = {
  apiUrl: `${window.location.origin}/api`,
};

Client.contextType = createContext(Object.assign(clientContext, serverConteext));

ReactDOM.render(
    <BrowserRouter>
      <Client />
    </BrowserRouter>,
  document.getElementById('app'),
);