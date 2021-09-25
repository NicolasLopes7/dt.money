import { NewTransactionModal } from './components/NewTransactionModal';
import { Header } from './components/Header';
import { Dashboard } from './components/Dashboard';

import { useState } from 'react';


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
      <NewTransactionModal
        isOpen={isNewTransactionModal}
        onRequestClose={handleCloseNewTransactionModal}
      />
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />

      <Dashboard />
    </>
  );
}

export default App;
