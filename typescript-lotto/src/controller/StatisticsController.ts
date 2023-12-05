import MatchResult from "../types/MatchResult.js";
import StatisticsService from "../service/StatisticsService.js";
import Statistics from "../domain/Statistics.js";
import OutputView from "../view/OutputView.js";
import { MATCH_COUNT, PRIZE, RANK } from "../constant/statistics.js";

class StatisticsController {
  private readonly statisticsService: StatisticsService;

  constructor() {
    this.statisticsService = new StatisticsService();
  }

  makeStatisticsBasedResult(result: MatchResult[]): Statistics {
    const statistics: Statistics =
      this.statisticsService.makeStatistics(result);
    const rankBoard = statistics.getRankBoard();

    OutputView.printStatisticsHeader();
    Object.entries(rankBoard)
      .reverse()
      .forEach(([rank, count]) => {
        const matchCount: number = MATCH_COUNT[rank];
        const prize: string = PRIZE[rank].toLocaleString();

        if (rank === RANK.second)
          OutputView.printSecondInfo(matchCount, prize, count);
        else OutputView.printStatisticsInfo(matchCount, prize, count);
      });

    return statistics;
  }

  showTotalRevenueRate(statistics: Statistics) {
    const totalRevenueRate: number = statistics.calculateTotalRevenueRate();
    OutputView.printTotalRevenueRate(totalRevenueRate);
  }
}

export default StatisticsController;
