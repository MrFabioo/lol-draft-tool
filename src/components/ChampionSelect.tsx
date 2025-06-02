import { TimerBar } from '../features/draft/TimerBar';
import { BansBar } from '../features/draft/BansBar';
import { PickColumn } from '../features/draft/PickColumn';
import { FilterButtons } from '../features/draft/FilterButtons';
import { SearchBar } from '../features/draft/SearchBar';
import { ChampionGrid } from '../features/draft/ChampionGrid';

export const ChampionSelect = () => {
  return (
    <div className='flex flex-wrap p-[20px] bg-linear-to-b from-gray-500 to-zinc-700 h-screen'>
      <TimerBar />

      <main className='flex w-full h-17/20'>
        <PickColumn />
        <aside className='px-[10px] w-4/6'>
          <div className='h-12 flex justify-between'>
            <FilterButtons />
            <SearchBar />
          </div>
          <ChampionGrid />
        </aside>
        <PickColumn />
      </main>

      <BansBar />
    </div>
  );
};
