import { useEffect } from 'react';
import { TimerBar } from '../components/TimerBar';
import { BansBar } from '../components/BansBar';
import { BluePicks } from '../components/BluePicks';
import { RedPicks } from '../components/RedPicks';
import { FilterButtons } from '../components/FilterButtons';
import { SearchBar } from '../components/SearchBar';
import { ChampionGrid } from '../components/ChampionGrid';
import { useChampionSelectLogic } from '../hooks/useChampionSelectLogic';

export default function ChampionSelect() {
  const {
    selectChampion,
    setSelectChampion,
    championsList,
    setChampionsList,
    searchChampion,
    setSearchChampion,
    activeRole,
    setActiveRole,
    socket,
    roomId,
  } = useChampionSelectLogic();

  useEffect(() => {
    if (!roomId) return;
    socket.emit('joinRoom', roomId);

    socket.on('updateChampionSelect', (newList) => {
      setChampionsList(newList);
    });

    return () => {
      socket.off('updateChampionSelect');
    };
  }, [roomId]);

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
          />
        </aside>
        <RedPicks championsList={championsList} />
      </main>

      <BansBar
        selectChampion={selectChampion}
        setSelectChampion={setSelectChampion}
        championsList={championsList}
        setChampionsList={setChampionsList}
        socket={socket}
        roomId={roomId}
      />
    </div>
  );
}
