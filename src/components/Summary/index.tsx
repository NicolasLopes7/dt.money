import { Container } from './styles';
import incomeImg from '../../assets/income.svg';
import totalImg from '../../assets/total.svg';
import outcomeImg from '../../assets/outcome.svg';

interface SummaryCardProps {
  title: string;
  image: string;
  amount: number | string;
  highlighted?: boolean;
}

const SummaryCard = ({
  title,
  image,
  amount,
  highlighted = false,
}: SummaryCardProps) => {
  return (
    <div className={highlighted ? 'highlighted' : ''}>
      <header>
        <p>{title}</p>
        <img src={image} alt="Summary item" />
      </header>
      <strong>R$ {amount}</strong>
    </div>
  );
};

export function Summary() {
  return (
    <Container>
      <SummaryCard title="Entradas" image={incomeImg} amount={1000} />
      <SummaryCard title="Saídas" image={outcomeImg} amount={1000} />
      <SummaryCard title="Total" image={totalImg} amount={1000} highlighted />
    </Container>
  );
}
