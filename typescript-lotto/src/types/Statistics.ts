export interface MatchCount {
  [first: string]: number;
  second: number;
  third: number;
  fourth: number;
  fifth: number;
}

export interface Rank {
  [first: string]: string;
  second: string;
  third: string;
  fourth: string;
  fifth: string;
}

export interface Prize {
  [first: string]: number;
  second: number;
  third: number;
  fourth: number;
  fifth: number;
}

export type StatisticsInfo = [string, number][];
