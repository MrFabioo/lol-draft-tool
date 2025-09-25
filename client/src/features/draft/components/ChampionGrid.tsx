import championsRaw from '../data/champions.json';
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
  const champions: RiotChampion[] = Object.values(championsRaw.data).map(
    (champ) => ({
      id: champ.id,
      key: champ.key,
      name: champ.name,
      image: { full: champ.image.full },
    })
  );

  const filteredChampions = champions.filter((champ) => {
    const roleMatch = !activeRole || roles[activeRole].includes(champ.key);
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
