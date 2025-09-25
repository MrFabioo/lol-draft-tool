import clsx from 'clsx';

type DraftButtonProps = {
  onClick: () => void;
  disabled: boolean;
  children: React.ReactNode;
};

export const DraftButton = ({
  onClick,
  disabled,
  children,
}: DraftButtonProps) => (
  <button
    type='button'
    onClick={onClick}
    disabled={disabled}
    className={clsx(
      'flex justify-center items-center text-5xl text-gold font-bold',
      'w-[98%] h-[94%] bg-dark-gray',
      '[clip-path:polygon(0%_0,100%_0,95%_100%,5%_100%)]',
      disabled ? 'cursor-not-allowed' : 'cursor-pointer active:brightness-120'
    )}
  >
    {children}
  </button>
);
