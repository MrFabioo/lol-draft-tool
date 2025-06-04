import champions from '../../data/champions.json';

export const ChampionGrid = ({ setSelectChampion }) => {
  return (
    <section className='flex justify-center flex-wrap w-full h-[calc(100%-48px)] overflow-auto'>
      {Object.entries(champions.data).map(([i, champ]) => (
        <div
          key={champ.key}
          className='m-1 cursor-pointer'
          onClick={() => setSelectChampion(champ)}
        >
          <img
            src={`https://ddragon.leagueoflegends.com/cdn/15.10.1/img/champion/${champ.image.full}`}
            alt={`${champ.name}`}
          />
        </div>
      ))}
    </section>
  );
};
