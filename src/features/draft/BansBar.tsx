export const BansBar = ({
  selectChampion,
  championsList,
  setChampionsList,
}) => {
  // const handleBan = () => {
  //   if (selectChampion) {
  //     setChampionsList([...championsList, selectChampion]);
  //   }
  // };

  const addChampion = () => {
    if (!selectChampion) return;
    setChampionsList((prev) => {
      if (prev.length >= 20) return prev;
      return [...prev, selectChampion];
    });
  };
  return (
    <footer className='bottom-bar flex w-full h-1/10 bg-team-red'>
      <div className='flex w-2/5 bg-team-blue'>
        <div className='ban-slot h-full w-1/5 bg-dark-gray'>
          {championsList[0] && (
            <img
              className='w-full h-full'
              src={`https://ddragon.leagueoflegends.com/cdn/15.10.1/img/champion/${championsList[0].image.full}`}
              alt={championsList[0]}
            />
          )}
        </div>
        <div className='ban-slot h-full w-1/5 bg-dark-gray'>
          {championsList[2] && (
            <img
              className='w-full h-full'
              src={`https://ddragon.leagueoflegends.com/cdn/15.10.1/img/champion/${championsList[2].image.full}`}
              alt={championsList[2]}
            />
          )}
        </div>
        <div className='ban-slot h-full w-1/5 bg-dark-gray'>
          {championsList[4] && (
            <img
              className='w-full h-full'
              src={`https://ddragon.leagueoflegends.com/cdn/15.10.1/img/champion/${championsList[4].image.full}`}
              alt={championsList[4]}
            />
          )}
        </div>
        <div className='ban-slot h-full w-1/5 bg-dark-gray ml-[20px]'>
          {championsList[13] && (
            <img
              className='w-full h-full'
              src={`https://ddragon.leagueoflegends.com/cdn/15.10.1/img/champion/${championsList[13].image.full}`}
              alt={championsList[13]}
            />
          )}
        </div>
        <div className='ban-slot h-full w-1/5 bg-dark-gray'>
          {championsList[15] && (
            <img
              className='w-full h-full'
              src={`https://ddragon.leagueoflegends.com/cdn/15.10.1/img/champion/${championsList[15].image.full}`}
              alt={championsList[15]}
            />
          )}
        </div>
      </div>
      <div className='w-1/5 flex justify-center items-center mx-[60px] bg-cyan-100'>
        <button
          className='cursor-pointer border-2'
          onClick={() => addChampion()}
        >
          Ban/Pick
        </button>
      </div>
      <div className='flex w-2/5 bg-team-blue'>
        <div className='ban-slot h-full w-1/5 bg-dark-gray'>
          {championsList[1] && (
            <img
              className='w-full h-full'
              src={`https://ddragon.leagueoflegends.com/cdn/15.10.1/img/champion/${championsList[1].image.full}`}
              alt={championsList[1]}
            />
          )}
        </div>
        <div className='ban-slot h-full w-1/5 bg-dark-gray'>
          {championsList[3] && (
            <img
              className='w-full h-full'
              src={`https://ddragon.leagueoflegends.com/cdn/15.10.1/img/champion/${championsList[3].image.full}`}
              alt={championsList[3]}
            />
          )}
        </div>
        <div className='ban-slot h-full w-1/5 bg-dark-gray'>
          {championsList[5] && (
            <img
              className='w-full h-full'
              src={`https://ddragon.leagueoflegends.com/cdn/15.10.1/img/champion/${championsList[5].image.full}`}
              alt={championsList[5]}
            />
          )}
        </div>
        <div className='ban-slot h-full w-1/5 bg-dark-gray ml-[20px]'>
          {championsList[12] && (
            <img
              className='w-full h-full'
              src={`https://ddragon.leagueoflegends.com/cdn/15.10.1/img/champion/${championsList[12].image.full}`}
              alt={championsList[12]}
            />
          )}
        </div>
        <div className='ban-slot h-full w-1/5 bg-dark-gray'>
          {championsList[14] && (
            <img
              className='w-full h-full'
              src={`https://ddragon.leagueoflegends.com/cdn/15.10.1/img/champion/${championsList[14].image.full}`}
              alt={championsList[14]}
            />
          )}
        </div>
      </div>
    </footer>
  );
};
