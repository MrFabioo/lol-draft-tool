export const SearchBar = ({ searchChampion, setSearchChampion }) => {
  return (
    <div className='w-1/3 relative'>
      <input
        className='h-full w-full p-2 pr-10 border rounded'
        type='text'
        placeholder='Search champion...'
        value={searchChampion}
        onChange={(e) => setSearchChampion(e.target.value)}
      />
      {searchChampion && (
        <button
          className='absolute right-2 top-1/2 -translate-y-1/2 text-lg text-gray-800 hover:text-black focus:outline-none'
          aria-label='Clear search'
          onClick={() => setSearchChampion('')}
        >
          ✕
        </button>
      )}
    </div>
  );
};
