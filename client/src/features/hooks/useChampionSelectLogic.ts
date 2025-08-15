import { useState } from 'react';
import type { Champion } from '../types/types';
import { socket } from './socket';
import { useParams } from 'react-router-dom';

export const useChampionSelectLogic = () => {
  const [selectChampion, setSelectChampion] = useState<Champion | null>(null);
  const [championsList, setChampionsList] = useState<Champion[]>([]);
  const [searchChampion, setSearchChampion] = useState('');
  const [activeRole, setActiveRole] = useState<string | null>(null);
  const { roomId } = useParams<{ roomId: string }>();

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
    roomId,
  };
};
