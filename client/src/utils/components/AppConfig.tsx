import { FC, ReactNode, StrictMode } from 'react';
import ThemeConfig from '@/utils/theme';
import RootStoreProvider from '@/stores';
import { store } from '@/stores/root.store';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter } from 'react-router-dom';

type Props = {
  children: ReactNode;
};

export const AppConfig: FC<Props> = ({ children }) => {
  return (
    <StrictMode>
      <BrowserRouter>
        <ThemeConfig>
          <RootStoreProvider store={store}>
            {children}
            <ToastContainer position="top-right" />
          </RootStoreProvider>
        </ThemeConfig>
      </BrowserRouter>
    </StrictMode>
  );
};
