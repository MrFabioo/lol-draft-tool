import championsRaw from '../data/champions.json';
import type { RiotChampion, DraftAction } from '../types/types';
import roles from '../data/roles.json';
import { ChampionCard } from './ChampionCard';

export const ChampionGrid = ({
  draftSequence,
  room,
  role,
  selectChampion,
  setSelectChampion,
  championsList,
  searchChampion,
  activeRole,
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
      champ.name.toLowerCase().includes(searchChampion.toLowerCase())
    );

  const isMyTurn =
    role !== 'spectator' && draftSequence[room.currentStep]?.team === role;

  return (
    <section className='flex justify-center content-start flex-wrap w-full h-[calc(100%-48px)] overflow-auto'>
      {filteredChampions.map(([_, champ]) => {
        const isDisabled =
          (selectChampion && selectChampion.id === champ.id) ||
          championsList.some((c) => c.id === champ.id);

        const finalDisabled = isDisabled || !isMyTurn;
        return (
          <ChampionCard
            key={champ.key}
            champion={champ}
            isDisabled={isDisabled}
            onClick={() => {
              !finalDisabled && setSelectChampion(champ);
            }}
          />
        );
      })}
    </section>
  );
};
