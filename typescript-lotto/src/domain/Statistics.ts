import RankBoard from "../types/RankBoard.js";
import MatchResult from "../types/MatchResult.js";
import { MATCH_COUNT, NO_RANK, PRIZE, RANK } from "../constant/statistics.js";

class Statistics {
  private board: RankBoard;

  constructor() {
    this.board = { first: 0, second: 0, third: 0, fourth: 0, fifth: 0 };
  }

  updateMatchResult(matchResult: MatchResult) {
    const rank: string = this.getRank(matchResult);

    if (rank === NO_RANK) return;
    this.board[rank] += 1;
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

  getStatistics(): RankBoard {
    return this.board;
  }

  calculateTotalRevenue(): number {
    return Object.entries(this.board).reduce((totalRevenue, [rank, count]) => {
      return totalRevenue + PRIZE[rank] * count;
    }, 0);
  }
}

export default Statistics;
