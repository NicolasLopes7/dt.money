import { Container } from './styles';
import { SummaryCard } from './SummaryCard';
import incomeImg from '../../assets/income.svg';
import totalImg from '../../assets/total.svg';
import outcomeImg from '../../assets/outcome.svg';
import { useContext } from 'react';
import { TransactionsContext } from '../../contexts/TransactionsContext';

type TransactionTypes = 'withdrawl' | 'deposit';
export function Summary() {
  const transactions = useContext(TransactionsContext);

  const getAmountByType = (type: TransactionTypes) =>
    transactions
      .filter((transaction) => transaction.type === type)
      .reduce((acc, trx) => acc + trx.value, 0);

  const amounts = {
    deposit: getAmountByType('deposit'),
    withdrawl: getAmountByType('withdrawl'),
    total: getAmountByType('deposit') - getAmountByType('withdrawl'),
  };

  return (
    <Container>
      <SummaryCard
        title="Entradas"
        image={incomeImg}
        amount={amounts.deposit}
      />
      <SummaryCard
        title="Saídas"
        image={outcomeImg}
        amount={amounts.withdrawl}
      />
      <SummaryCard
        title="Total"
        image={totalImg}
        amount={amounts.total}
        highlighted
      />
    </Container>
  );
}
