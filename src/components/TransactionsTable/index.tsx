import { useEffect } from 'react';
import { Container } from './styles';
import api from '../../services/api';

export function TransactionsTable() {
  useEffect(() => {
    api.get('/transactions').then((res) => console.log(res.data));
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
          <tr>
            <td>Desenvolvimento de site</td>
            <td className="deposit">R$ 100,00</td>
            <td>Desenvolvimento</td>
            <td>22/09/2021</td>
          </tr>
          <tr>
            <td>Aluguel</td>
            <td className="withdrawl">R$ 100,00</td>
            <td>Casa</td>
            <td>22/09/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
