import { createContext, useState } from 'react';

export const ReactContext = createContext();

export const ReactContextProvider = ({ children }) => {
  const [seed, setSeed] = useState(1);
  const reset = () => {
    setSeed(Math.random());
  };

  return (
    <ReactContext.Provider value={{ seed, reset }}>
      {children}
    </ReactContext.Provider>
  );
};
