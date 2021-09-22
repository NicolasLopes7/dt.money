import { createServer } from 'miragejs';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { GlobalStyle } from './styles/global';

createServer({
  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return [
        {
          id: 1,
          title: 'transaction 1',
          amount: 400,
          type: 'deposit',
          date: '21-09-2021',
        },
        {
          id: 2,
          title: 'transaction 2',
          amount: 200,
          type: 'withdrawl',
          date: '21-09-2021',
        },
      ];
    });
  },
});

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
