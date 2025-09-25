import { BanSlot } from './ui/BanSlot';
import { DraftButton } from './ui/DraftButton';
import { draftSequence } from '../data/draftSequence';
import { RoomState } from '../types/types';

interface BansBarProps {
  room: RoomState;
  socket: any;
  roomId: string;
  role: 'red' | 'blue' | 'spectator';
}

export const BansBar = ({ room, socket, roomId, role }: BansBarProps) => {
  const currentPlayer = room.players[socket.id!];
  const isMyTurn =
    role !== 'spectator' && draftSequence[room.currentStep]?.team === role;
  const canReady =
    currentPlayer.role !== 'spectator' && room.status === 'waiting';

  const handleReady = () => {
    if (!roomId) return;
    socket.emit('playerReady', { roomId });
  };
  const addChampion = () => {
    const currentChamp = room.championList[room.currentStep];
    if (!isMyTurn) return;
    if (!currentChamp) return;
    socket.emit('confirmChampion', { roomId });
  };

  const leftSlots = [0, 2, 4, 13, 15];
  const rightSlots = [14, 12, 5, 3, 1];

  const getMarginClass = (index: number, team: 'blue' | 'red') => {
    if (team === 'blue') return [0, 13].includes(index) ? 'ml-10' : 'ml-5';
    return [1, 12].includes(index) ? 'mr-10' : 'mr-5';
  };

  const renderSlots = (indexes: number[], team: 'blue' | 'red') =>
    indexes.map((index) => (
      <div key={index} className={`w-1/5 ${getMarginClass(index, team)}`}>
        <BanSlot
          champion={room.championList[index]}
          team={team}
          active={room.currentStep === index}
          status={room.status}
        />
      </div>
    ));

  const getButtonProps = () => {
    if (canReady) {
      return currentPlayer.ready && role !== 'spectator'
        ? { onClick: handleReady, disabled: true, label: 'WAITING...' }
        : { onClick: handleReady, disabled: false, label: 'READY' };
    }
    if (draftSequence.length > room.currentStep) {
      const currentStepData = draftSequence[room.currentStep];
      if (currentStepData.team === role) {
        return {
          onClick: addChampion,
          disabled: !isMyTurn,
          label: currentStepData.type.toUpperCase(),
        };
      } else {
        return { onClick: addChampion, disabled: true, label: 'WAITING...' };
      }
    }
    return { onClick: () => {}, disabled: true, label: 'END' };
  };

  const { onClick, disabled, label } = getButtonProps();

  return (
    <footer className='flex w-full h-3/20'>
      <div className='flex w-2/5 my-5'>{renderSlots(leftSlots, 'blue')}</div>
      <div className='flex w-1/5 my-5 mx-10'>
        <div className='flex justify-center items-center w-full bg-gold [clip-path:polygon(0%_0,100%_0,95%_100%,5%_100%)]'>
          <DraftButton onClick={onClick} disabled={disabled}>
            {label}
          </DraftButton>
        </div>
      </div>
      <div className='flex w-2/5 my-5'>{renderSlots(rightSlots, 'red')}</div>
    </footer>
  );
};
