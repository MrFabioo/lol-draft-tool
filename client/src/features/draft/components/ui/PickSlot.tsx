import clsx from 'clsx';
import { Champion } from '../../types/types';

type PickSlotProps = {
  champion: Champion | null;
  marginBottom?: string;
  blue?: boolean;
  active?: boolean;
};

export const PickSlot = ({
  champion,
  marginBottom = 'mb-[5px]',
  blue,
  active,
}: PickSlotProps) => {
  return (
    <div
      className={clsx(
        'relative w-full h-1/5 border-3 border-gold',
        marginBottom
      )}
    >
      {active && (
        <div
          className={clsx(
            'absolute top-0 left-0 z-10 w-1/20 h-full animate-pulse',
            blue ? 'bg-team-blue' : 'bg-team-red'
          )}
        />
      )}
      {champion && champion.key ? (
        <div
          className='relative z-0 w-full h-full bg-size-[241%]'
          style={{
            backgroundImage: `url(https://cdn.communitydragon.org/latest/champion/${champion.key}/splash-art/centered/skin/0)`,
            backgroundPosition: '52% 28%',
          }}
        >
          <p
            className={clsx(
              'absolute bottom-1 text-white',
              blue ? 'right-2' : 'left-2'
            )}
          >
            {champion.name}
          </p>
        </div>
      ) : (
        <div className='z-0 w-full h-full bg-dark-gray'></div>
      )}
    </div>
  );
};
