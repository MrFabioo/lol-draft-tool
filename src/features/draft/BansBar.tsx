export const BansBar = () => {
  return (
    <footer className='bottom-bar flex w-full h-1/10 bg-team-red'>
      <div className='flex w-2/5 bg-team-blue'>
        <div className='ban-slot h-full w-1/5 bg-dark-gray'></div>
        <div className='ban-slot h-full w-1/5 bg-dark-gray'></div>
        <div className='ban-slot h-full w-1/5 bg-dark-gray'></div>
        <div className='ban-slot h-full w-1/5 bg-dark-gray ml-[20px]'></div>
        <div className='ban-slot h-full w-1/5 bg-dark-gray'></div>
      </div>
      <div className='waiting w-1/5 flex justify-center items-center mx-[60px] bg-cyan-100'>
        Waiting...
      </div>
      <div className='flex w-2/5 bg-team-blue'>
        <div className='ban-slot h-full w-1/5 bg-dark-gray'></div>
        <div className='ban-slot h-full w-1/5 bg-dark-gray'></div>
        <div className='ban-slot h-full w-1/5 bg-dark-gray'></div>
        <div className='ban-slot h-full w-1/5 bg-dark-gray ml-[20px]'></div>
        <div className='ban-slot h-full w-1/5 bg-dark-gray'></div>
      </div>
    </footer>
  );
};
