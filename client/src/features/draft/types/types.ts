export type RoleKey = 'support' | 'bottom' | 'top' | 'middle' | 'jungle';
export const ROLES: RoleKey[] = [
  'top',
  'jungle',
  'middle',
  'bottom',
  'support',
] as const;

export type RiotChampion = {
  id: string | null;
  key: string;
  name: string | null;
  image: {
    full: string;
  };
};

export type Champion = RiotChampion & {
  action: 'pick' | 'ban';
  team: 'red' | 'blue';
  auto?: boolean;
};

export interface Player {
  role: 'red' | 'blue' | 'spectator';
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
  team: 'red' | 'blue';
};
