import champions from '../../data/champions.json';

export const ChampionGrid = ({
  selectChampion,
  setSelectChampion,
  championsList,
  searchChampion,
}) => {
  const filteredChampions = Object.entries(champions.data).filter(
    ([i, champ]) =>
      champ.name.toLowerCase().includes(searchChampion.toLowerCase())
  );

  return (
    <section className='flex justify-center flex-wrap w-full h-[calc(100%-48px)] overflow-auto'>
      {filteredChampions.map(([i, champ]) => {
        const isDisabled =
          (selectChampion && selectChampion.id === champ.id) ||
          championsList.some((c) => c.id === champ.id);
        return (
          <div
            key={champ.key}
            className={`m-1 cursor-pointer ${
              isDisabled ? 'opacity-50 pointer-events-none' : ''
            }`}
            onClick={() => !isDisabled && setSelectChampion(champ)}
          >
            <img
              src={`https://ddragon.leagueoflegends.com/cdn/15.10.1/img/champion/${champ.image.full}`}
              alt={`${champ.name}`}
            />
          </div>
        );
      })}
    </section>
  );
};
