export type Champion = {
  id: string;
  key: string;
  name: string;
  image: {
    full: string;
  };
  action: 'pick' | 'ban';
  team: 'Red' | 'Blue';
};

export interface Player {
  role: 'Red' | 'Blue' | 'Spectator';
  ready: boolean;
}

export interface RoomState {
  championList: Champion[];
  players: Record<string, Player>;
  status: 'waiting' | 'drafting';
}
