import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'typeface-jost';
import App from '@/App';
import { ProviderWrapper } from '@/utils/components/ProviderWrapper';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ProviderWrapper>
    <App />
  </ProviderWrapper>
);
