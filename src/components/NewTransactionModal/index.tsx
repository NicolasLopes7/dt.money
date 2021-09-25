import { FormEvent, useState } from 'react';
import Modal from 'react-modal';
import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import api from '../../services/api';

import { Container, TransactionTypeContainer, RadioBox } from './styles';

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

interface NewTransactionDTO {
  title: string;
  value: number;
  type: string;
  category: string;
}

export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) {
  const [data, setData] = useState({} as NewTransactionDTO);

  const mutateData = (key: keyof NewTransactionDTO, value: string | number) => {
    setData({ ...data, [key]: value });
  };

  const clearData = () => setData({} as NewTransactionDTO);

  const createTransaction = async () => {
    await api.post('/transaction', data);
  };

  const handleCreateNewTransaction = async (event: FormEvent) => {
    event.preventDefault();

    await createTransaction();

    clearData();
    onRequestClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      ariaHideApp={false}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <img src={closeImg} alt="Close modal" />
      </button>

      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar transação</h2>

        <input
          placeholder="Título"
          value={data.title}
          onChange={(e) => mutateData('title', e.target.value)}
        />
        <input
          type="number"
          placeholder="Valor"
          value={data.value}
          onChange={(e) => mutateData('value', Number(e.target.value))}
        />
        <TransactionTypeContainer>
          <RadioBox
            isActive={data.type === 'deposit'}
            activeColor="green"
            type="button"
            onClick={() => mutateData('type', 'deposit')}
          >
            <img src={incomeImg} alt="Entrada" />
            <span>Entrada</span>
          </RadioBox>
          <RadioBox
            isActive={data.type === 'withdrawl'}
            activeColor="red"
            type="button"
            onClick={() => mutateData('type', 'withdrawl')}
          >
            <img src={outcomeImg} alt="Saída" />
            <span>Saída</span>
          </RadioBox>
        </TransactionTypeContainer>
        <input
          placeholder="Categoria"
          value={data.category}
          onChange={(e) => mutateData('category', e.target.value)}
        />
        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
}
