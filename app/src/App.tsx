import React from 'react';
import AppProvider from './hooks';
import Routes from './routes';

import GLobalStyle from './styles/global';

const App: React.FC = () => (
  <>
    <AppProvider>
      <Routes />
    </AppProvider>
    <GLobalStyle />
  </>
);

export default App;
