import RankBoard from "../types/RankBoard.js";
import MatchResult from "../types/MatchResult.js";

class Statistics {
  private board: RankBoard;

  constructor() {
    this.board = { first: 0, second: 0, third: 0, fourth: 0, fifth: 0 };
  }

  updateMatchResult(matchResult: MatchResult) {
    // const { matchCount, isBonus } = matchResult;
  }
}

export default Statistics;
