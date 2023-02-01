import React from 'react';
import ReactDOM from 'react-dom/client';
import { ToastContainer } from 'react-toastify';
import App from './App';
import './index.css';
import RootStoreProvider from './stores';
import { store } from './stores/root.store';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RootStoreProvider store={store}>
      <App />
      <ToastContainer position="top-right" />
    </RootStoreProvider>
  </React.StrictMode>
);
