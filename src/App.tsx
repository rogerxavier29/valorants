import React from 'react';
import GlobalStyle from './GlobalStyles';

import Header from './components/header';
import Routes from './routes';

const App: React.FC = () => {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <Routes />
    </div>
  );
};

export default App;
