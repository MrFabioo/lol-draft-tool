export const FilterButtons = ({ activeRole, setActiveRole }) => {
  const imagePath = './src/assets/images/Position_Gold-';

  return (
    <div className='w-1/3 flex justify-around'>
      <button
        className={`cursor-pointer h-full`}
        onClick={() => setActiveRole(activeRole === 'top' ? null : 'top')}
      >
        <img
          src={imagePath + 'Top.png'}
          alt='Position Gold Top'
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
          src={imagePath + 'Jungle.png'}
          alt='Position Gold Jungle'
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
          src={imagePath + 'Mid.png'}
          alt='Position Gold Mid'
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
          src={imagePath + 'Bot.png'}
          alt='Position Gold Bot'
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
          src={imagePath + 'Support.png'}
          alt='Position Gold Support'
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
