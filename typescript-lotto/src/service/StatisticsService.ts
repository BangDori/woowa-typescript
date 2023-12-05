import MatchResult from "../types/MatchResult.js";
import Statistics from "../domain/Statistics.js";

class StatisticsService {
  makeStatistics(result: MatchResult[]): Statistics {
    return new Statistics(result);
  }
}

export default StatisticsService;
