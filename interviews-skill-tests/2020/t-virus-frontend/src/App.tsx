import React from 'react';

import { BrowserRouter } from 'react-router-dom';

import GLobalStyle from './styles/global';
import AppProvider from './hooks';
import Routes from './routes';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <GLobalStyle />
      <AppProvider>
        <Routes />
      </AppProvider>
    </BrowserRouter>
  );
};

export default App;
