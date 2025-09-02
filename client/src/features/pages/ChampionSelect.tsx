import { useEffect } from 'react';
import { TimerBar } from '../components/TimerBar';
import { BansBar } from '../components/BansBar';
import { BluePicks } from '../components/BluePicks';
import { RedPicks } from '../components/RedPicks';
import { FilterButtons } from '../components/FilterButtons';
import { SearchBar } from '../components/SearchBar';
import { ChampionGrid } from '../components/ChampionGrid';
import { useChampionSelectLogic } from '../hooks/useChampionSelectLogic';
import { RoomState, DraftAction } from '../types/types';

export default function ChampionSelect() {
  const draftSequence: DraftAction[] = [
    { type: 'ban', team: 'blue' },
    { type: 'ban', team: 'red' },
    { type: 'ban', team: 'blue' },
    { type: 'ban', team: 'red' },
    { type: 'ban', team: 'blue' },
    { type: 'ban', team: 'red' },
    { type: 'pick', team: 'blue' },
    { type: 'pick', team: 'red' },
    { type: 'pick', team: 'red' },
    { type: 'pick', team: 'blue' },
    { type: 'pick', team: 'blue' },
    { type: 'pick', team: 'red' },
    { type: 'ban', team: 'red' },
    { type: 'ban', team: 'blue' },
    { type: 'ban', team: 'red' },
    { type: 'ban', team: 'blue' },
    { type: 'pick', team: 'red' },
    { type: 'pick', team: 'blue' },
    { type: 'pick', team: 'blue' },
    { type: 'pick', team: 'red' },
  ];

  const {
    room,
    setRoom,
    searchChampion,
    setSearchChampion,
    activeRole,
    setActiveRole,
    socket,
    roomId,
    role,
  } = useChampionSelectLogic();

  useEffect(() => {
    if (!roomId || !role) return;

    const playerRole =
      role.toLocaleLowerCase() === 'red'
        ? 'red'
        : role.toLocaleLowerCase() === 'blue'
        ? 'blue'
        : 'spectator';

    socket.emit('joinRoom', { roomId, role: playerRole });

    const handler = (newRoom: RoomState) => setRoom(newRoom);
    socket.on('updateRoom', handler);

    return () => {
      socket.off('updateRoom', handler);
    };
  }, [roomId, role]);

  if (!room) return <div>Loading...</div>;

  return (
    <div className='flex flex-wrap p-[20px] bg-linear-to-b from-gray-500 to-zinc-700 h-screen'>
      <TimerBar room={room} />

      <main className='flex w-full h-17/20'>
        <BluePicks championsList={room.championList} />
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
            draftSequence={draftSequence}
            room={room}
            roomId={roomId}
            role={role}
            championsList={room.championList}
            searchChampion={searchChampion}
            activeRole={activeRole}
            socket={socket}
          />
        </aside>
        <RedPicks championsList={room.championList} />
      </main>

      <BansBar
        draftSequence={draftSequence}
        room={room}
        socket={socket}
        roomId={roomId}
        role={role}
      />
    </div>
  );
}
