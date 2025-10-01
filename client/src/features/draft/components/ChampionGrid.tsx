import { useEffect, useState } from 'react';
import type {
  Champion,
  RiotChampion,
  RoomState,
  RoleKey,
} from '../types/types';
import roles from '../data/roles.json';
import { ChampionCard } from './ui/ChampionCard';
import { draftSequence } from '../data/draftSequence';

interface ChampionGridProps {
  room: RoomState;
  role: 'red' | 'blue' | 'spectator';
  roomId: string;
  championsList: Champion[];
  searchChampion: string;
  activeRole: RoleKey | null;
  socket: any;
}

export const ChampionGrid = ({
  room,
  role,
  roomId,
  championsList,
  searchChampion,
  activeRole,
  socket,
}: ChampionGridProps) => {
  const [champions, setChampions] = useState<RiotChampion[]>([]);
  const [version, setVersion] = useState<string | null>(null);

  useEffect(() => {
    const fetchChampions = async () => {
      try {
        const versionRes = await fetch(
          'https://ddragon.leagueoflegends.com/api/versions.json'
        );
        const version = await versionRes.json();
        const latest = version[0];
        setVersion(latest);

        const championRes = await fetch(
          'https://ddragon.leagueoflegends.com/cdn/15.19.1/data/en_US/champion.json'
        );
        const data = await championRes.json();
        const champs: RiotChampion[] = Object.values(data.data).map(
          (champ: any) => ({
            id: champ.id,
            key: champ.key,
            name: champ.name,
            image: { full: champ.image.full },
          })
        );

        champs.sort((a, b) =>
          (a.name ?? '').localeCompare(b.name ?? '', 'en', {
            sensitivity: 'base',
          })
        );

        setChampions(champs);
      } catch (err) {
        console.error('Błąd przy pobieraniu danych', err);
      }
    };

    fetchChampions();
  }, []);

  const filteredChampions = champions.filter((champ) => {
    const roleMatch =
      !activeRole || roles[activeRole].includes(champ.name ?? '');
    const searchMatch = champ.name
      ?.toLowerCase()
      .includes(searchChampion.toLowerCase());
    return roleMatch && searchMatch;
  });

  const isMyTurn =
    role !== 'spectator' && draftSequence[room.currentStep]?.team === role;

  const handleClick = (champ: RiotChampion) => {
    const currentChamp = room.championList[room.currentStep];
    const isDisabled =
      (currentChamp && currentChamp.id === champ.id) ||
      championsList.some((c) => c.id === champ.id) ||
      !isMyTurn;

    if (isDisabled) return;

    const actionType = draftSequence[room.currentStep].type;
    const team = role;

    const newChampion: Champion = {
      ...champ,
      action: 'pick',
      team,
    };

    socket.emit('updateChampionSelect', {
      roomId,
      champion: newChampion,
      actionType,
      team,
    });
  };

  return (
    <section className='flex justify-center content-start flex-wrap w-full h-[calc(100%-48px)] overflow-auto custom-scroll'>
      {filteredChampions.map((champ) => {
        const currentChamp = room.championList[room.currentStep];
        const isDisabled =
          (currentChamp && currentChamp.id === champ.id) ||
          championsList.some((c) => c.id === champ.id);

        return (
          <ChampionCard
            key={champ.key}
            champion={champ}
            isDisabled={isDisabled}
            onClick={() => handleClick(champ)}
          />
        );
      })}
    </section>
  );
};
