export type RiotChampion = {
  id: string;
  key: string;
  name: string;
  image: {
    full: string;
  };
};
export type Champion = RiotChampion & {
  action: 'pick' | 'ban';
  team: 'Red' | 'Blue';
};

export interface Player {
  role: 'Red' | 'Blue' | 'Spectator';
  ready: boolean;
}

export interface RoomState {
  currentStep: number;
  championList: Champion[];
  players: Record<string, Player>;
  status: 'waiting' | 'drafting';
}

export type DraftAction = {
  type: 'ban' | 'pick';
  team: 'blue' | 'red';
};
