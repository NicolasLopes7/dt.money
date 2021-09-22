import { Header } from './components/Header';
import { Dashboard } from './components/Dashboard';

import { useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('root');

function App() {
  const [isNewTransactionModal, setIsNewTransactionModalOpen] = useState(false);

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false);
  }

  return (
    <>
      <Modal
        isOpen={isNewTransactionModal}
        onRequestClose={handleCloseNewTransactionModal}
      >
        <h2>Cadastrar transação</h2>
      </Modal>

      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />

      <Dashboard />
    </>
  );
}

export default App;
