import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from './GlobalStyles';

const App: React.FC = () => {
  return (
    <div>
      <GlobalStyle />
      <BrowserRouter>Ola</BrowserRouter>
    </div>
  );
};

export default App;
