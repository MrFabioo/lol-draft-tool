import { useState } from 'react';
import type { Champion, RoomState } from '../types/types';
import { socket } from './socket';
import { useParams } from 'react-router-dom';

export const useChampionSelectLogic = () => {
  const [selectChampion, setSelectChampion] = useState<Champion | null>(null);
  const [room, setRoom] = useState<RoomState | null>(null);
  const [searchChampion, setSearchChampion] = useState('');
  const [activeRole, setActiveRole] = useState<string | null>(null);
  const { roomId, role } = useParams<{
    roomId: string;
    role: 'red' | 'blue' | 'spectator';
  }>();

  return {
    selectChampion,
    setSelectChampion,
    room,
    setRoom,
    searchChampion,
    setSearchChampion,
    activeRole,
    setActiveRole,
    socket,
    roomId,
    role,
  };
};
