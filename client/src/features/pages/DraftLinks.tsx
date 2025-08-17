import { Link, useParams } from 'react-router-dom';

export default function DraftLinks() {
  const { roomId } = useParams<{ roomId: string }>();

  if (!roomId) return <h1>RoomId not found</h1>;

  return (
    <>
      <h1>DraftLinks</h1>
      <nav>
        <ul>
          <li>
            <Link to={`/${roomId}/blue`}>{`/${roomId}/blue`}</Link>
          </li>
          <li>
            <Link to={`/${roomId}/red`}>{`/${roomId}/red`}</Link>
          </li>
          <li>
            <Link to={`/${roomId}/spectator`}>{`/${roomId}/spectator`}</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
