import { useState } from 'react';
import type { Champion } from '../types/types';

export const useChampionSelectLogic = () => {
  const [selectChampion, setSelectChampion] = useState<Champion | null>(null);
  const [championsList, setChampionsList] = useState<Champion[]>([]);
  const [searchChampion, setSearchChampion] = useState('');
  const [activeRole, setActiveRole] = useState<string | null>(null);

  return {
    selectChampion,
    setSelectChampion,
    championsList,
    setChampionsList,
    searchChampion,
    setSearchChampion,
    activeRole,
    setActiveRole,
  };
};
