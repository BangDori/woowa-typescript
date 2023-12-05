import RankBoard from "../types/RankBoard.js";
import MatchResult from "../types/MatchResult.js";
import {
  INITIAL_RANK_BOARD,
  MATCH_COUNT,
  NO_RANK,
  PRIZE,
  RANK,
} from "../constant/statistics.js";
import { LOTTO_PRICE } from "../constant/setting.js";

class Statistics {
  private rankBoard: RankBoard;
  private readonly money: number;

  constructor(result: MatchResult[]) {
    this.rankBoard = this.getResultBoard(result);
    this.money = result.length * LOTTO_PRICE;
  }

  private getResultBoard(result: MatchResult[]) {
    return result.reduce((state: RankBoard, matchResult: MatchResult) => {
      const rank: string = this.getRank(matchResult);
      if (rank === NO_RANK) return state;

      state[rank] += 1;
      return state;
    }, INITIAL_RANK_BOARD);
  }

  private getRank(matchResult: MatchResult): string {
    const { matchCount, isBonus } = matchResult;

    if (matchCount === MATCH_COUNT.first) return RANK.first;
    if (matchCount === MATCH_COUNT.second && isBonus) return RANK.second;
    if (matchCount === MATCH_COUNT.third) return RANK.third;
    if (matchCount === MATCH_COUNT.fourth) return RANK.fourth;
    if (matchCount === MATCH_COUNT.fifth) return RANK.fifth;

    return NO_RANK;
  }

  getRankBoard() {
    return this.rankBoard;
  }

  calculateTotalRevenueRate(): number {
    const totalRevenue = Object.entries(this.rankBoard).reduce(
      (totalRevenue, [rank, count]) => {
        return totalRevenue + PRIZE[rank] * count;
      },
      0
    );
    const totalRevenueRate = (totalRevenue / this.money) * 100;

    return totalRevenueRate;
  }
}

export default Statistics;
