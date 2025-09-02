import championsRaw from '../data/champions.json';
import type { RiotChampion, DraftAction } from '../types/types';
import roles from '../data/roles.json';
import { ChampionCard } from './ChampionCard';

export const ChampionGrid = ({
  draftSequence,
  room,
  role,
  roomId,
  championsList,
  searchChampion,
  activeRole,
  socket,
}) => {
  const champions: Record<string, RiotChampion> = Object.fromEntries(
    Object.entries(championsRaw.data).map(([id, champ]) => [
      id,
      {
        id: champ.id,
        key: champ.key,
        name: champ.name,
        image: { full: champ.image.full },
      },
    ])
  );

  const allChampions = Object.entries(champions);

  const filteredChampions = allChampions
    .filter(([_, champ]) => {
      if (!activeRole) return true;
      return roles[activeRole].includes(champ.key);
    })
    .filter(([_, champ]) =>
      champ.name?.toLowerCase().includes(searchChampion.toLowerCase())
    );

  const isMyTurn =
    role !== 'spectator' && draftSequence[room.currentStep]?.team === role;

  return (
    <section className='flex justify-center content-start flex-wrap w-full h-[calc(100%-48px)] overflow-auto'>
      {filteredChampions.map(([_, champ]) => {
        const currentChamp = room.championList[room.currentStep];

        const isDisabled =
          (currentChamp && currentChamp.id === champ.id) ||
          championsList.some((c) => c.id === champ.id);

        const finalDisabled = isDisabled || !isMyTurn;
        return (
          <ChampionCard
            key={champ.key}
            champion={champ}
            isDisabled={isDisabled}
            onClick={() => {
              if (!finalDisabled) {
                const actionType = draftSequence[room.currentStep].type;
                const team = role === 'red' ? 'red' : 'blue';

                const newChampion = {
                  id: champ.id,
                  key: champ.key,
                  name: champ.name,
                  image: { full: champ.image.full },
                  action: 'pick',
                  team,
                };

                socket.emit('updateChampionSelect', {
                  roomId,
                  champion: newChampion,
                  actionType,
                  team,
                });
              }
            }}
          />
        );
      })}
    </section>
  );
};
