import React, { useState } from 'react';
import { TimerBar } from '../features/draft/TimerBar';
import { BansBar } from '../features/draft/BansBar';
import { BluePicks } from '../features/draft/BluePicks';
import { RedPicks } from '../features/draft/RedPicks';
import { FilterButtons } from '../features/draft/FilterButtons';
import { SearchBar } from '../features/draft/SearchBar';
import { ChampionGrid } from '../features/draft/ChampionGrid';

export const ChampionSelect = () => {
  type Champion = {
    id: string;
    key: string;
    name: string;
    image: {
      full: string;
      sprite: string;
      group: string;
    };
  };

  const [selectChampion, setSelectChampion] = useState<Champion | null>(null);
  const [championsList, setChampionsList] = useState<Champion[]>([]);
  const [searchChampion, setSearchChampion] = useState('');

  return (
    <div className='flex flex-wrap p-[20px] bg-linear-to-b from-gray-500 to-zinc-700 h-screen'>
      <TimerBar />

      <main className='flex w-full h-17/20'>
        <BluePicks championsList={championsList} />
        <aside className='px-[10px] w-4/6'>
          <div className='h-12 flex justify-between'>
            <FilterButtons />
            <SearchBar
              searchChampion={searchChampion}
              setSearchChampion={setSearchChampion}
            />
          </div>
          <ChampionGrid
            selectChampion={selectChampion}
            setSelectChampion={setSelectChampion}
            championsList={championsList}
            searchChampion={searchChampion}
          />
        </aside>
        <RedPicks championsList={championsList} />
      </main>

      <BansBar
        selectChampion={selectChampion}
        setSelectChampion={setSelectChampion}
        championsList={championsList}
        setChampionsList={setChampionsList}
      />
    </div>
  );
};
