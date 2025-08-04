export const FilterButtons = ({ activeRole, setActiveRole }) => {
  return (
    <div className='w-1/3 flex justify-around'>
      <button
        className={`cursor-pointer h-full`}
        onClick={() => setActiveRole(activeRole === 'top' ? null : 'top')}
      >
        <img
          src='./src/assets/Position_Gold-Top.png'
          alt='Position top'
          className={`h-full ${
            activeRole === 'top' ? 'drop-shadow-[0_0_10px_rgba(0,0,0,1)]' : ''
          }`}
        />
      </button>
      <button
        className='cursor-pointer'
        onClick={() => setActiveRole(activeRole === 'jungle' ? null : 'jungle')}
      >
        <img
          src='./src/assets/Position_Gold-Jungle.png'
          alt='Position jungle'
          className={`h-full ${
            activeRole === 'jungle'
              ? 'drop-shadow-[0_0_10px_rgba(0,0,0,1)]'
              : ''
          }`}
        />
      </button>
      <button
        className='cursor-pointer'
        onClick={() => setActiveRole(activeRole === 'mid' ? null : 'mid')}
      >
        <img
          src='./src/assets/Position_Gold-Mid.png'
          alt='Position mid'
          className={`h-full ${
            activeRole === 'mid' ? 'drop-shadow-[0_0_10px_rgba(0,0,0,1)]' : ''
          }`}
        />
      </button>
      <button
        className='cursor-pointer'
        onClick={() => setActiveRole(activeRole === 'bot' ? null : 'bot')}
      >
        <img
          src='./src/assets/Position_Gold-Bot.png'
          alt='Position bot'
          className={`h-full ${
            activeRole === 'bot' ? 'drop-shadow-[0_0_10px_rgba(0,0,0,1)]' : ''
          }`}
        />
      </button>
      <button
        className='cursor-pointer'
        onClick={() =>
          setActiveRole(activeRole === 'support' ? null : 'support')
        }
      >
        <img
          src='./src/assets/Position_Gold-Support.png'
          alt='Position support'
          className={`h-full ${
            activeRole === 'support'
              ? 'drop-shadow-[0_0_10px_rgba(0,0,0,1)]'
              : ''
          }`}
        />
      </button>
    </div>
  );
};
