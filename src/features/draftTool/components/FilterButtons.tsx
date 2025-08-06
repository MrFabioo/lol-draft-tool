import { RoleButton } from './RoleButton';

const ROLES = ['top', 'jungle', 'mid', 'bot', 'support'];

export const FilterButtons = ({ activeRole, setActiveRole }) => {
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
