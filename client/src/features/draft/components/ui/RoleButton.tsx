import clsx from 'clsx';
import { RoleKey } from '../../types/types';

type RoleButtonProps = {
  role: RoleKey;
  isActive: boolean;
  onClick: () => void;
};

const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

export const RoleButton = ({ role, isActive, onClick }: RoleButtonProps) => {
  return (
    <button className={`cursor-pointer h-full`} onClick={onClick}>
      <img
        src={`/src/assets/images/${capitalize(role)}_icon.png`}
        alt={`Position ${capitalize(role)}`}
        className={clsx(
          'h-full',
          isActive ? 'brightness-120' : 'brightness-90'
        )}
      />
    </button>
  );
};
