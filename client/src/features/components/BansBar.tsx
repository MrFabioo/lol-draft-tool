import { BanSlot } from './BanSlot';
import { Champion } from '../types/types';
import { DraftAction } from '../types/types';

export const BansBar = ({
  selectChampion,
  setSelectChampion,
  room,
  socket,
  roomId,
  role,
}) => {
  const currentPlayer = room?.players[socket.id!];

  const draftSequence: DraftAction[] = [
    { type: 'ban', team: 'blue' },
    { type: 'ban', team: 'red' },
    { type: 'ban', team: 'blue' },
    { type: 'ban', team: 'red' },
    { type: 'ban', team: 'blue' },
    { type: 'ban', team: 'red' },
    { type: 'pick', team: 'blue' },
    { type: 'pick', team: 'red' },
    { type: 'pick', team: 'red' },
    { type: 'pick', team: 'blue' },
    { type: 'pick', team: 'blue' },
    { type: 'pick', team: 'red' },
    { type: 'ban', team: 'red' },
    { type: 'ban', team: 'blue' },
    { type: 'ban', team: 'red' },
    { type: 'ban', team: 'blue' },
    { type: 'pick', team: 'red' },
    { type: 'pick', team: 'blue' },
    { type: 'pick', team: 'blue' },
    { type: 'pick', team: 'red' },
  ];

  const isMyTurn =
    role !== 'spectator' && draftSequence[room.currentStep]?.team === role;

  const handleAction = () => {
    if (!isMyTurn) return;
    const actionType = draftSequence[room.currentStep].type;
    socket.emit('makeAction', { actionType, team: role });
  };

  const canReady =
    currentPlayer.role !== 'Spectator' && room.status === 'waiting';

  const handleReady = () => {
    if (!roomId) return;
    socket.emit('playerReady', { roomId });
  };
  const addChampion = () => {
    if (!isMyTurn) return;

    const actionType = draftSequence[room.currentStep].type;
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
    socket.emit('updateChampionSelect', {
      roomId,
      champion: newChampion,
      actionType,
      team: role,
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
            <BanSlot champion={room.championList[index]} />
          </div>
        ))}
      </div>
      <div className='w-1/5 flex justify-center items-center mx-[60px] bg-cyan-100'>
        {canReady ? (
          <button onClick={handleReady}>
            {currentPlayer.ready ? 'WAITING...' : 'READY'}
          </button>
        ) : (
          <button
            disabled={!isMyTurn}
            onClick={addChampion}
            className={`${isMyTurn ? 'cursor-pointer' : 'cursor-not-allowed'}`}
          >
            {draftSequence[room.currentStep]?.type?.toUpperCase() || 'END'}
          </button>
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
