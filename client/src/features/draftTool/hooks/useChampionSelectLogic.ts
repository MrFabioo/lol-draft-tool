import { useState } from 'react';
import type { Champion } from '../types/types';
import { io } from 'socket.io-client';

export const useChampionSelectLogic = () => {
  const [selectChampion, setSelectChampion] = useState<Champion | null>(null);
  const [championsList, setChampionsList] = useState<Champion[]>([]);
  const [searchChampion, setSearchChampion] = useState('');
  const [activeRole, setActiveRole] = useState<string | null>(null);
  const socket = io('http://localhost:3000');

  return {
    selectChampion,
    setSelectChampion,
    championsList,
    setChampionsList,
    searchChampion,
    setSearchChampion,
    activeRole,
    setActiveRole,
    socket,
  };
};
