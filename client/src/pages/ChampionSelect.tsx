import { useEffect } from 'react';
import { TimerBar } from '../features/draft/components/TimerBar';
import { BansBar } from '../features/draft/components/BansBar';
import { BluePicks } from '../features/draft/components/BluePicks';
import { RedPicks } from '../features/draft/components/RedPicks';
import { FilterButtons } from '../features/draft/components/ui/FilterButtons';
import { SearchBar } from '../features/draft/components/ui/SearchBar';
import { ChampionGrid } from '../features/draft/components/ChampionGrid';
import { useChampionSelectLogic } from '../features/draft/hooks/useChampionSelectLogic';
import { RoomState, RoleKey } from '../features/draft/types/types';
import Sequence from '../features/draft/components/ui/DraftSequence';

export default function ChampionSelect() {
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

    const playerRole: 'red' | 'blue' | 'spectator' =
      role.toLowerCase() === 'red'
        ? 'red'
        : role.toLowerCase() === 'blue'
        ? 'blue'
        : 'spectator';

    socket.emit('joinRoom', { roomId, role: playerRole });

    const handler = (newRoom: RoomState) => setRoom(newRoom);
    socket.on('updateRoom', handler);

    return () => {
      socket.off('updateRoom', handler);
    };
  }, [roomId, role, socket, setRoom]);

  if (!room) return <div>Loading...</div>;

  return (
    <div className='flex flex-wrap bg-background h-screen'>
      <TimerBar room={room} />

      <main className='flex w-full h-[calc(70%-52px)] mt-13'>
        <BluePicks
          championsList={room.championList}
          currentStep={room.currentStep}
        />
        <aside className='mx-16 w-4/6 bg-dark-gray border-3 border-gold'>
          <div className='h-12 flex justify-between border-b-3 border-gold'>
            <FilterButtons
              activeRole={activeRole}
              setActiveRole={setActiveRole}
            />
            <Sequence currentStep={room.currentStep} />
            <SearchBar
              searchChampion={searchChampion}
              setSearchChampion={setSearchChampion}
            />
          </div>
          <ChampionGrid
            room={room}
            roomId={roomId!}
            role={role!}
            championsList={room.championList}
            searchChampion={searchChampion}
            activeRole={activeRole as RoleKey | null}
            socket={socket}
          />
        </aside>
        <RedPicks
          championsList={room.championList}
          currentStep={room.currentStep}
        />
      </main>

      <BansBar room={room} socket={socket} roomId={roomId!} role={role!} />
    </div>
  );
}
