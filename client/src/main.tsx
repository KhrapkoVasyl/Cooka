import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'typeface-jost';
import App from '@/App';
import { AppConfig } from '@/utils/components/AppConfig';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <AppConfig>
    <App />
  </AppConfig>
);
