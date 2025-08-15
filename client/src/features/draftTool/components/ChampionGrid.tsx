import champions from '../data/champions.json';
import roles from '../data/roles.json';
import { ChampionCard } from './ChampionCard';

export const ChampionGrid = ({
  selectChampion,
  setSelectChampion,
  championsList,
  searchChampion,
  activeRole,
}) => {
  const allChampions = Object.entries(champions.data);

  const filteredChampions = allChampions
    .filter(([_, champ]) => {
      if (!activeRole) return true;
      return roles[activeRole].includes(champ.key);
    })
    .filter(([_, champ]) =>
      champ.name.toLowerCase().includes(searchChampion.toLowerCase())
    );

  return (
    <section className='flex justify-center content-start flex-wrap w-full h-[calc(100%-48px)] overflow-auto'>
      {filteredChampions.map(([_, champ]) => {
        const isDisabled =
          (selectChampion && selectChampion.id === champ.id) ||
          championsList.some((c) => c.id === champ.id);
        return (
          <ChampionCard
            key={champ.key}
            champion={champ}
            isDisabled={isDisabled}
            onClick={() => !isDisabled && setSelectChampion(champ)}
          />
        );
      })}
    </section>
  );
};
