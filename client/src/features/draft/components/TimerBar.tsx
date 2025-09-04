export const TimerBar = ({ room }) => {
  return (
    <header className='w-full h-12 flex text-white text-sm font-bold '>
      {/* Team Blue */}
      <div className='w-1/3 bg-team-blue flex items-center justify-end px-4'>
        Blue
      </div>

      {/* Draft Phase */}
      <div className='w-1/3 flex items-center justify-center bg-gray-800 text-white'>
        {room.timer}
      </div>

      {/* Team Red */}
      <div className='w-1/3 bg-team-red flex items-center justify-start px-4'>
        Red
      </div>
    </header>
  );
};
