import { ReactContextProvider } from '../services/ReactContextProvider';

export const RootLayout = ({ children }) => {
  return (
    <ReactContextProvider>
      <div className='layout'>{children}</div>
    </ReactContextProvider>
  );
};
