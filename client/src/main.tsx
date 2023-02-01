import React from 'react';
import ReactDOM from 'react-dom/client';
import { ToastContainer } from 'react-toastify';
import App from './App';
import './index.css';
import RootStoreProvider from './stores';
import { store } from './stores/root.store';
import { BrowserRouter } from 'react-router-dom';
import ThemeConfig from './theme';
import 'typeface-jost';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeConfig>
        <RootStoreProvider store={store}>
          <App />
          <ToastContainer position="top-right" />
        </RootStoreProvider>
      </ThemeConfig>
    </BrowserRouter>
  </React.StrictMode>
);
