import React, { createContext, useState } from 'react';

const EditThemeModalContext = createContext({
  editThemeModalOpen: false,
  setEditThemeModalOpen: () => null,
});

const EditThemeModalProvider = ({ children }) => {
  const [editThemeModalOpen, setEditThemeModalOpen] = useState(false);

  const updateModalStatus = (modalNewStatus) => {
    setEditThemeModalOpen(modalNewStatus);
  };

  return (
    <EditThemeModalContext.Provider
      value={{
        editThemeModalOpen,
        setEditThemeModalOpen: updateModalStatus,
      }}
    >
      {children}
    </EditThemeModalContext.Provider>
  );
};

export { EditThemeModalContext, EditThemeModalProvider };
