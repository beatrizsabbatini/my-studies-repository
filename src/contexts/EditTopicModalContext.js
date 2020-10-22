import React, { createContext, useState } from 'react';

const EditTopicModalContext = createContext({
  editTopicModalOpen: false,
  setEditTopicModalOpen: () => null,
});

const EditTopicModalProvider = ({ children }) => {
  const [editTopicModalOpen, setEditTopicModalOpen] = useState(false);

  const updateModalStatus = (modalNewStatus) => {
    setEditTopicModalOpen(modalNewStatus);
  };

  return (
    <EditTopicModalContext.Provider
      value={{
        editTopicModalOpen,
        setEditTopicModalOpen: updateModalStatus,
      }}
    >
      {children}
    </EditTopicModalContext.Provider>
  );
};

export { EditTopicModalContext, EditTopicModalProvider };
