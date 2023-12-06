export interface MatchCount {
  [count: string]: number;
  first: number;
  second: number;
  third: number;
  fourth: number;
  fifth: number;
}

export interface Rank {
  [rank: string]: string;
  first: string;
  second: string;
  third: string;
  fourth: string;
  fifth: string;
}

export interface Prize {
  [prize: string]: number;
  first: number;
  second: number;
  third: number;
  fourth: number;
  fifth: number;
}

export type StatisticsInfo = [string, number][];
