import { createServer, Model } from 'miragejs';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { GlobalStyle } from './styles/global';

createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Freelance de site',
          type: 'deposit',
          category: 'software',
          value: 6000,
          createdAt: new Date('2021-09-25 09:00:00'),
        },
        {
          id: 2,
          title: 'Alugel',
          type: 'withdrawl',
          category: 'casa',
          value: 1000,
          createdAt: new Date('2021-09-25 09:00:00'),
        },
      ],
    });
  },

  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return this.schema.all('transaction');
    });

    this.post('/transaction', (schema, req) => {
      const data = JSON.parse(req.requestBody);

      return schema.create('transaction', { ...data, createdAt: new Date() });
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
