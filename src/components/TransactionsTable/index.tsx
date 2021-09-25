import { useEffect, useState } from 'react';
import { Container } from './styles';
import api from '../../services/api';

interface Transaction {
  title: string;
  type: 'deposit' | 'withdrawl';
  value: number;
  category: string;
  createdAt: string;
}

export function TransactionsTable() {
  const [transactions, setTransactions] = useState([] as Transaction[]);

  const { timeZoneName } = Intl.DateTimeFormat().resolvedOptions();
  const currencyFormatter = new Intl.NumberFormat(timeZoneName, {
    style: 'currency',
    currency: 'BRL',
  });

  const dateFormatter = new Intl.DateTimeFormat('pt-BR');

  const fetchTransactions = async () => {
    const {
      data: { transactions },
    } = await api.get('/transactions');

    setTransactions(transactions);
  };

  useEffect(() => {
    fetchTransactions();
  }, []);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map((transaction) => (
            <tr>
              <td>{transaction.title}</td>
              <td className={transaction.type}>
                {currencyFormatter.format(transaction.value)}
              </td>
              <td>{transaction.category}</td>
              <td>{dateFormatter.format(new Date(transaction.createdAt))}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
}
