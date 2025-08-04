import React, { useState } from 'react';
import { TimerBar } from './ui/TimerBar';
import { BansBar } from './ui/BansBar';
import { BluePicks } from './ui/BluePicks';
import { RedPicks } from './ui/RedPicks';
import { FilterButtons } from './ui/FilterButtons';
import { SearchBar } from './ui/SearchBar';
import { ChampionGrid } from './ui/ChampionGrid';
// import roles from '../../data/roles.json';

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
  const [activeRole, setActiveRole] = useState<string | null>(null);

  return (
    <div className='flex flex-wrap p-[20px] bg-linear-to-b from-gray-500 to-zinc-700 h-screen'>
      <TimerBar />

      <main className='flex w-full h-17/20'>
        <BluePicks championsList={championsList} />
        <aside className='px-[10px] w-4/6'>
          <div className='h-12 flex justify-between'>
            <FilterButtons
              activeRole={activeRole}
              setActiveRole={setActiveRole}
            />
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
            activeRole={activeRole}
            // roles={roles}
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
