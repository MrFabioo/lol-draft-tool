import { Champion } from '../types/types';

export const BanSlot = ({ champion }: { champion: Champion }) => {
  if (!champion || !champion.image) {
    return <div className='h-full w-1/5 bg-dark-gray' />;
  }

  return (
    <img
      className='w-full h-full'
      src={`https://ddragon.leagueoflegends.com/cdn/15.10.1/img/champion/${champion.image.full}`}
      alt={champion.id || 'empty'}
    />
  );
};
