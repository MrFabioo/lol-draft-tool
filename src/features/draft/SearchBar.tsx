export const SearchBar = ({ searchChampion, setSearchChampion }) => {
  return (
    <div className='w-1/3'>
      <input
        className='h-full p-2 border rounded mb-4'
        type='text'
        placeholder='Search champion...'
        value={searchChampion}
        onChange={(e) => setSearchChampion(e.target.value)}
      />
      <button
        className='clear-btn size-9'
        onClick={() => setSearchChampion('')}
      >
        ✕
      </button>
    </div>
  );
};
