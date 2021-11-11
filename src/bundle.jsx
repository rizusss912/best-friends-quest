import React from 'react';
import ReactDOM from 'react-dom';
import { Client } from './client';

Client.contextType = React.createContext(JSON.parse(window.context));

ReactDOM.render(
  <Client />,
  document.getElementById('app'),
);