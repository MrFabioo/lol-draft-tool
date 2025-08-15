import { BanSlot } from './BanSlot';

export const BansBar = ({
  selectChampion,
  setSelectChampion,
  championsList,
  setChampionsList,
  socket,
}) => {
  const addChampion = () => {
    if (!selectChampion) return;

    setChampionsList((prev) => {
      if (prev.length >= 20) return prev;
      const newList = [...prev, selectChampion];
      socket.emit('updateChampionSelect', newList);
      return newList;
    });
    setSelectChampion(null);
  };

  const leftSlots = [0, 2, 4, 13, 15];
  const rightSlots = [1, 3, 5, 12, 14];

  return (
    <footer className='bottom-bar flex w-full h-1/10 bg-team-red'>
      <div className='flex w-2/5 bg-team-blue'>
        {leftSlots.map((index, i) => (
          <div
            key={i}
            className={
              index === 13
                ? 'ban-slot h-full w-1/5 bg-dark-gray ml-[20px]'
                : 'ban-slot h-full w-1/5 bg-dark-gray'
            }
          >
            <BanSlot champion={championsList[index]} />
          </div>
        ))}
      </div>
      <div className='w-1/5 flex justify-center items-center mx-[60px] bg-cyan-100'>
        <button className='cursor-pointer border-2' onClick={addChampion}>
          Ban/Pick
        </button>
      </div>

      <div className='flex w-2/5 bg-team-blue'>
        {rightSlots.map((index, i) => (
          <div
            key={i}
            className={
              index === 12
                ? 'ban-slot h-full w-1/5 bg-dark-gray ml-[20px]'
                : 'ban-slot h-full w-1/5 bg-dark-gray'
            }
          >
            <BanSlot champion={championsList[index]} />
          </div>
        ))}
      </div>
    </footer>
  );
};
