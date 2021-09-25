import { createContext, useEffect, useState } from 'react';
import api from '../services/api';

interface Transaction {
  title: string;
  type: 'deposit' | 'withdrawl';
  value: number;
  category: string;
  createdAt: string;
}

export const TransactionsContext = createContext<Transaction[]>([]);

export const TransactionsProvider: React.FC = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

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
    <TransactionsContext.Provider value={transactions}>
      <TransactionsProvider />
    </TransactionsContext.Provider>
  );
};
