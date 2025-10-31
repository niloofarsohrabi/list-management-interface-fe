import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import ListManagement from './components/list-management/ListManagement.tsx';

import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ListManagement />
  </StrictMode>,
);
