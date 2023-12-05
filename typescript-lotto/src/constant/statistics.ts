import RankBoard from "../types/RankBoard.js";
import { MatchCount, Rank, Prize } from "../types/Statistics.js";

export const NO_RANK = "NO_RANK";

export const INITIAL_RANK_BOARD: RankBoard = {
  first: 0,
  second: 0,
  third: 0,
  fourth: 0,
  fifth: 0,
};

export const MATCH_COUNT: MatchCount = Object.freeze({
  first: 6,
  second: 5,
  third: 5,
  fourth: 4,
  fifth: 3,
});

export const RANK: Rank = Object.freeze({
  first: "first",
  second: "second",
  third: "third",
  fourth: "fourth",
  fifth: "fifth",
});

export const PRIZE: Prize = Object.freeze({
  first: 2_000_000_000,
  second: 30_000_000,
  third: 1_500_000,
  fourth: 50_000,
  fifth: 5_000,
});
