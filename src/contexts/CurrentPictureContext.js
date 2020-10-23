import React, { createContext, useState } from 'react';

const CurrentPictureContext = createContext({
  picture: false,
  setCurrentPicture: () => null,
});

const CurrentPictureProvider = ({ children }) => {
  const [picture, setCurrentPicture] = useState(false);

  const updatePicture = (newPicture) => {
    setCurrentPicture(newPicture);
  };

  return (
    <CurrentPictureContext.Provider
      value={{
        picture,
        setCurrentPicture: updatePicture,
      }}
    >
      {children}
    </CurrentPictureContext.Provider>
  );
};

export { CurrentPictureContext, CurrentPictureProvider };
