import { BanSlot } from './BanSlot';
import { Champion } from '../types/types'; // add

export const BansBar = ({
  selectChampion,
  setSelectChampion,
  room,
  socket,
  roomId,
  currentPlayer,
}) => {
  const addChampion = () => {
    if (!selectChampion || !currentPlayer || currentPlayer.role === 'Spectator')
      return;

    const team = currentPlayer.role === 'Red' ? 'Red' : 'Blue';
    const newChampion: Champion = {
      id: selectChampion.id,
      key: selectChampion.key,
      name: selectChampion.name,
      image: {
        full: selectChampion.image.full,
      },
      action: 'pick',
      team,
    };

    socket.emit('updateChampionSelect', { roomId, champion: newChampion });
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
            <BanSlot champion={room.championList[index]} />
          </div>
        ))}
      </div>
      <div className='w-1/5 flex justify-center items-center mx-[60px] bg-cyan-100'>
        {room.championList.length < 20 &&
          currentPlayer.role !== 'Spectator' &&
          room.status === 'drafting' && (
            <button onClick={addChampion}>Dodaj</button>
          )}
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
            <BanSlot champion={room.championList[index]} />
          </div>
        ))}
      </div>
    </footer>
  );
};
