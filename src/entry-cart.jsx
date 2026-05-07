import React from 'react';
import ReactDOM from 'react-dom/client';
import Cart from './pages/Cart';
import EntryWrapper from './EntryWrapper';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <EntryWrapper>
      <Cart />
    </EntryWrapper>
  </React.StrictMode>
);
