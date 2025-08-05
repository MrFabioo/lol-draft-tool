export const TimerBar = () => {
  return (
    <header className='header flex justify-between h-1/20 w-full'>
      <div className='flex justify-end items-center w-1/3 bg-team-blue'>
        Blue
      </div>
      <div className='flex justify-center items-center w-1/3'>Blue Ban</div>
      <div className='flex justify-start items-center w-1/3 bg-team-red'>
        Red
      </div>
    </header>
  );
};
