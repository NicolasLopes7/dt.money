import { useContext } from 'react';
import { TransactionsContext } from '../../contexts/TransactionsContext';
import { Container } from './styles';

export function TransactionsTable() {
  const transactions = useContext(TransactionsContext);
  const { timeZoneName } = Intl.DateTimeFormat().resolvedOptions();
  const currencyFormatter = new Intl.NumberFormat(timeZoneName, {
    style: 'currency',
    currency: 'BRL',
  });

  const dateFormatter = new Intl.DateTimeFormat('pt-BR');

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
