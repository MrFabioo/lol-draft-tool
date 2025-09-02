import type { RiotChampion } from '../types/types';

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
    className={`m-1 cursor-pointer ${
      isDisabled ? 'opacity-50 pointer-events-none' : ''
    }`}
    onClick={onClick}
  >
    <img
      src={`https://ddragon.leagueoflegends.com/cdn/15.10.1/img/champion/${champion.image.full}`}
      alt={champion.name ?? ''}
    />
  </div>
);
