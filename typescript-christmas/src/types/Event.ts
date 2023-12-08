export type EventInfo = [string, number];
export type GiftEventInfo = [string, string] | undefined;

export interface Badge {
  [index: string]: {
    name: string;
    required: number;
  };
}

export interface Reward {
  name: string;
  item?: string;
  reward: number;
}
