import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ChampionSelect from './features/pages/ChampionSelect.tsx';
import Home from './features/pages/Home.tsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/draft/:roomId' element={<ChampionSelect />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
