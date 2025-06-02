export const FilterButtons = () => {
  return (
    <div className='w-1/3 flex justify-around'>
      <button className='cursor-pointer h-full'>
        <img
          src='./src/assets/Position_Gold-Top.png'
          alt='Position top'
          className=' h-full'
        />
      </button>
      <button className='cursor-pointer'>
        <img
          src='./src/assets/Position_Gold-Jungle.png'
          alt='Position top'
          className=' h-full'
        />
      </button>
      <button className='cursor-pointer'>
        <img
          src='./src/assets/Position_Gold-Mid.png'
          alt='Position top'
          className=' h-full'
        />
      </button>
      <button className='cursor-pointer'>
        <img
          src='./src/assets/Position_Gold-Bot.png'
          alt='Position top'
          className=' h-full'
        />
      </button>
      <button className='cursor-pointer'>
        <img
          src='./src/assets/Position_Gold-Support.png'
          alt='Position top'
          className=' h-full'
        />
      </button>
    </div>
  );
};
