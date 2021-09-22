import { Container } from './styles';
import incomeImg from '../../assets/income.svg';
import totalImg from '../../assets/total.svg';
import outcomeImg from '../../assets/outcome.svg';

export function Summary() {
  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="Summary item" />
        </header>
        <strong>R$ 1000,00</strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <img src={outcomeImg} alt="Summary item" />
        </header>
        <strong>R$ 1000,00</strong>
      </div>
      <div className="highlighted">
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Summary item" />
        </header>
        <strong>R$ 1000,00</strong>
      </div>
    </Container>
  );
}
