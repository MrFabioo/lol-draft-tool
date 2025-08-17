import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

export default function Home() {
  const navigate = useNavigate();

  const createRoom = () => {
    const roomId = uuidv4();
    navigate(`/${roomId}`);
  };

  return (
    <div className='p-4'>
      <h1>Witaj w Champion Select</h1>
      <button onClick={createRoom}>Utwórz nowy pokój</button>
    </div>
  );
}
