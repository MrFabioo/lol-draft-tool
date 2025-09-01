export type RiotChampion = {
  id: string | null;
  key?: string;
  name: string | null;
  image?: {
    full: string;
  };
};
export type Champion = RiotChampion & {
  action: 'pick' | 'ban';
  team: 'Red' | 'Blue';
  auto?: boolean;
};

export interface Player {
  role: 'Red' | 'Blue' | 'Spectator';
  ready: boolean;
}

export interface RoomState {
  championList: Champion[];
  players: Record<string, Player>;
  status: 'waiting' | 'drafting';
  currentStep: number;
  timer: number;
}

export type DraftAction = {
  type: 'ban' | 'pick';
  team: 'blue' | 'red';
};
