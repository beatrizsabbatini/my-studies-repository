import React, { createContext, useState } from 'react';

const AddTopicModalContext = createContext({
  addTopicModalOpen: false,
  setAddTopicModalOpen: () => null,
});

const AddTopicModalProvider = ({ children }) => {
  const [addTopicModalOpen, setAddTopicModalOpen] = useState(false);

  const updateModalStatus = (modalNewStatus) => {
    setAddTopicModalOpen(modalNewStatus);
  };

  return (
    <AddTopicModalContext.Provider
      value={{
        addTopicModalOpen,
        setAddTopicModalOpen: updateModalStatus,
      }}
    >
      {children}
    </AddTopicModalContext.Provider>
  );
};

export { AddTopicModalContext, AddTopicModalProvider };
