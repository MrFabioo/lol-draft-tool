import { RoleButton } from './RoleButton';
import { RoleKey, ROLES } from '../../types/types';

interface FilterButtonsProps {
  activeRole: RoleKey | null;
  setActiveRole: (role: RoleKey | null) => void;
}

export const FilterButtons = ({
  activeRole,
  setActiveRole,
}: FilterButtonsProps) => {
  return (
    <div className='w-1/3 flex justify-around'>
      {ROLES.map((role) => (
        <RoleButton
          key={role}
          role={role}
          isActive={activeRole === role}
          onClick={() => setActiveRole(activeRole === role ? null : role)}
        />
      ))}
    </div>
  );
};
