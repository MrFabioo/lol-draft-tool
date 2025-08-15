type RoleButtonProps = {
  role: string;
  isActive: boolean;
  onClick: () => void;
};

export const RoleButton = ({ role, isActive, onClick }: RoleButtonProps) => {
  const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

  return (
    <button className={`cursor-pointer h-full`} onClick={onClick}>
      <img
        src={`/src/assets/images/Position_Gold-${capitalize(role)}.png`}
        alt={`Position Gold ${capitalize(role)}`}
        className={`h-full ${
          isActive ? 'drop-shadow-[0_0_10px_rgba(0,0,0,1)]' : ''
        }`}
      />
    </button>
  );
};
