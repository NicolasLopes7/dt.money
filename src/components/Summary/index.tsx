import { Container } from './styles';
import { SummaryCard } from './SummaryCard';
import incomeImg from '../../assets/income.svg';
import totalImg from '../../assets/total.svg';
import outcomeImg from '../../assets/outcome.svg';

export function Summary() {
  return (
    <Container>
      <SummaryCard title="Entradas" image={incomeImg} amount={1000} />
      <SummaryCard title="Saídas" image={outcomeImg} amount={1000} />
      <SummaryCard title="Total" image={totalImg} amount={1000} highlighted />
    </Container>
  );
}
