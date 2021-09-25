import { NewTransactionModal } from './components/NewTransactionModal';
import { Header } from './components/Header';
import { Dashboard } from './components/Dashboard';
import { TransactionsProvider } from './contexts/TransactionsContext';
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
    <TransactionsProvider>
      <NewTransactionModal
        isOpen={isNewTransactionModal}
        onRequestClose={handleCloseNewTransactionModal}
      />
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />

      <Dashboard />
    </TransactionsProvider>
  );
}

export default App;
