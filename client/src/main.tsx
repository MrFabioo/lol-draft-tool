import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './features/pages/Home.tsx';
import ChampionSelect from './features/pages/ChampionSelect.tsx';
import './index.css';
import DraftLinks from './features/pages/DraftLinks.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:roomId' element={<DraftLinks />} />
        <Route path='/:roomId/:role' element={<ChampionSelect />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
