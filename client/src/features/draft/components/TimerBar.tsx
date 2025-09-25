import { draftSequence } from '../data/draftSequence';
import { RoomState } from '../types/types';
import clsx from 'clsx';

interface TimerBarProps {
  room: RoomState;
}

export const TimerBar = ({ room }: TimerBarProps) => {
  const currentAction = draftSequence[room.currentStep];
  const activeTeam = currentAction?.team;

  const bgPositionMap: Record<string, string> = {
    waiting: 'bg-center',
    blue: 'bg-left',
    red: 'bg-right',
  };

  const bgPosition =
    room.status === 'waiting'
      ? bgPositionMap.waiting
      : bgPositionMap[activeTeam || 'waiting'];

  const baseGradient =
    'linear-gradient(90deg, #4F64F5 0%, #2D2647 50%, #EC3538 100%)';

  return (
    <header
      className={clsx(
        'w-full h-[15%] flex items-center border-b-3 border-gold text-gold text-sm font-bold',
        'bg-[length:200%_100%] transition-[background-position] duration-1000 ease-in-out',
        bgPosition
      )}
      style={{ backgroundImage: baseGradient }}
    >
      <div className='w-[45%] flex justify-center text-8xl'>TEAM BLUE</div>
      <div className='w-[10%] flex justify-center text-9xl'>{room.timer}</div>
      <div className='w-[45%] flex justify-center text-8xl'>TEAM RED</div>
    </header>
  );
};
