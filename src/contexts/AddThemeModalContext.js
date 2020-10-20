import React, { createContext, useState } from 'react';

const AddThemeModalContext = createContext({
  modalOpen: false,
  setModalOpen: () => null,
});

const AddThemeModalProvider = ({ children }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const updateModalStatus = (modalNewStatus) => {
    setModalOpen(modalNewStatus);
  };

  return (
    <AddThemeModalContext.Provider
      value={{
        modalOpen,
        setModalOpen: updateModalStatus,
      }}
    >
      {children}
    </AddThemeModalContext.Provider>
  );
};

export { AddThemeModalContext, AddThemeModalProvider };
