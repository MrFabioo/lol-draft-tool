import type { RiotChampion } from '../../types/types';
import clsx from 'clsx';

type ChampionCardProps = {
  champion: RiotChampion;
  isDisabled: boolean;
  onClick: () => void;
};

export const ChampionCard = ({
  champion,
  isDisabled,
  onClick,
}: ChampionCardProps) => (
  <div
    className={clsx(
      'relative m-1 cursor-pointer',
      isDisabled && 'pointer-events-none'
    )}
    onClick={onClick}
    aria-disabled={isDisabled}
  >
    <img
      src={`https://ddragon.leagueoflegends.com/cdn/15.19.1/img/champion/${champion.image.full}`}
      alt={champion.name ?? ''}
      className={clsx(isDisabled && 'grayscale')}
      loading='lazy'
      draggable={false}
    />
  </div>
);
