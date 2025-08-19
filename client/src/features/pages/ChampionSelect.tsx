import { useEffect } from 'react';
import { TimerBar } from '../components/TimerBar';
import { BansBar } from '../components/BansBar';
import { BluePicks } from '../components/BluePicks';
import { RedPicks } from '../components/RedPicks';
import { FilterButtons } from '../components/FilterButtons';
import { SearchBar } from '../components/SearchBar';
import { ChampionGrid } from '../components/ChampionGrid';
import { useChampionSelectLogic } from '../hooks/useChampionSelectLogic';
import { RoomState } from '../types/types';

export default function ChampionSelect() {
  const {
    selectChampion,
    setSelectChampion,
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
        ? 'Red'
        : role.toLocaleLowerCase() === 'blue'
        ? 'Blue'
        : 'Spectator';

    socket.emit('joinRoom', { roomId, role: playerRole });

    const handler = (newRoom: RoomState) => setRoom(newRoom);
    socket.on('updateRoom', handler);

    return () => {
      socket.off('updateRoom', handler);
    };
  }, [roomId, role]);

  if (!room) return <div>Loading...</div>;

  const currentPlayer = room?.players[socket.id!];

  const handleReady = () => {
    if (!roomId) return;
    socket.emit('playerReady', { roomId });
  };
  return (
    <div className='flex flex-wrap p-[20px] bg-linear-to-b from-gray-500 to-zinc-700 h-screen'>
      <h1>
        Pokój: {roomId} - {currentPlayer?.role}
      </h1>
      <h2>Status: {room.status}</h2>

      <h3>Gracze:</h3>

      {currentPlayer.role !== 'Spectator' && room.status === 'waiting' && (
        <button onClick={handleReady}>
          {currentPlayer.ready ? 'Gotowy!' : 'Kliknij gotowy'}
        </button>
      )}

      <ul>
        {Object.entries(room.players).map(([id, player]) => (
          <li key={id}>
            {player.role} {player.ready ? '(gotowy)' : '(nie gotowy)'}
            {id === socket.id ? ' (Ty)' : ''}
          </li>
        ))}
      </ul>
      <TimerBar />

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
            selectChampion={selectChampion}
            setSelectChampion={setSelectChampion}
            championsList={room.championList}
            searchChampion={searchChampion}
            activeRole={activeRole}
          />
        </aside>
        <RedPicks championsList={room.championList} />
      </main>

      <BansBar
        selectChampion={selectChampion}
        setSelectChampion={setSelectChampion}
        room={room}
        socket={socket}
        roomId={roomId}
        currentPlayer={currentPlayer}
      />
    </div>
  );
}
