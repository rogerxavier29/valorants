import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Main from './pages/Main';
import Agents from './pages/Agents';
import Maps from './pages/Maps';
import Arsenal from './pages/Arsenal';
import Download from './pages/Download';
import Suporte from './pages/Suporte';

export default function Routess() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/agents' element={<Agents />} />
        <Route path='/maps' element={<Maps />} />
        <Route path='/arsenal' element={<Arsenal />} />
        <Route path='/download' element={<Download />} />
        <Route path='/support' element={<Suporte />} />
      </Routes>
    </BrowserRouter>
  );
}
