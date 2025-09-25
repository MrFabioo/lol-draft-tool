import { X } from 'lucide-react';

interface SearchBarProps {
  searchChampion: string;
  setSearchChampion: (value: string) => void;
}

export const SearchBar = ({
  searchChampion,
  setSearchChampion,
}: SearchBarProps) => {
  return (
    <div className='w-1/3 relative flex items-center pr-1'>
      <input
        type='text'
        placeholder='SERCH CHAMPION...'
        value={searchChampion}
        onChange={(e) => setSearchChampion(e.target.value)}
        className='w-19/20 h-8/10 p-2 pr-10 border border-gold bg-transparent text-gold placeholder:text-gold/50 uppercase font-semibold 
                   focus:outline-none focus:ring-0'
      />
      {searchChampion && (
        <X
          className='absolute right-10 top-1/2 -translate-y-1/2 text-gold cursor-pointer'
          aria-label='Clear search'
          onClick={() => setSearchChampion('')}
        />
      )}
    </div>
  );
};
