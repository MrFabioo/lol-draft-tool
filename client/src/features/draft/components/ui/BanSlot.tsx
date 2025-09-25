import { Champion } from '../../types/types';
import clsx from 'clsx';

interface BanSlotProps {
  champion: Champion;
  team: 'blue' | 'red';
  active: boolean;
  status: string;
}

export const BanSlot = ({ champion, team, active, status }: BanSlotProps) => {
  const teamConfig = {
    blue: {
      skew: 'skew-x-[10deg]',
      unskew: 'skew-x-[-10deg]',
      line: 'rotate-45',
    },
    red: {
      skew: 'skew-x-[-10deg]',
      unskew: 'skew-x-[10deg]',
      line: 'rotate-135',
    },
  }[team];

  return (
    <div
      className={clsx(
        'relative w-full h-full border-3 border-gold overflow-hidden',
        teamConfig.skew
      )}
    >
      {active && status === 'drafting' && (
        <div
          className={clsx(
            'absolute z-10 inset-0 h-1/10 animate-pulse',
            `bg-team-${team}`
          )}
        />
      )}

      {champion?.image ? (
        <div
          className={clsx(
            'absolute w-[120%] h-[120%] left-[-10%] bg-size-[241%] bg-cover bg-center grayscale-50',
            teamConfig.unskew
          )}
          style={{
            backgroundImage: `url('https://cdn.communitydragon.org/latest/champion/${champion.key}/splash-art/centered/skin/0')`,
            backgroundPosition: '52% 28%',
          }}
        />
      ) : (
        <div className='absolute inset-0 bg-dark-gray' />
      )}

      <div
        className={clsx(
          'absolute left-1/2 w-[3px] h-full bg-gold',
          teamConfig.line
        )}
      />
    </div>
  );
};
