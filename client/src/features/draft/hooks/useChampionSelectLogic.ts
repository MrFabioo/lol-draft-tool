import { useState } from 'react';
import type { RoleKey, RoomState } from '../types/types';
import { socket } from './socket';
import { useParams } from 'react-router-dom';

export const useChampionSelectLogic = () => {
  const [room, setRoom] = useState<RoomState | null>(null);
  const [searchChampion, setSearchChampion] = useState<string>('');
  const [activeRole, setActiveRole] = useState<RoleKey | null>(null);
  const { roomId, role } = useParams<{
    roomId: string;
    role: 'red' | 'blue' | 'spectator';
  }>();

  return {
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
