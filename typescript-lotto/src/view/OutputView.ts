import Lotto from "../domain/Lotto.js";
import { OUTPUT_MESSAGE } from "../constant/io.js";
import { StatisticsInfo } from "../types/Statistics.js";
import { MATCH_COUNT, PRIZE, RANK } from "../constant/statistics.js";

const OutputView = {
  printErrorMessage: (errorMessage: string) => {
    console.log(errorMessage);
  },

  printLottos: (lottos: Lotto[]) => {
    console.log(`\n${lottos.length}개를 구매했습니다.`);
    lottos.forEach((lotto: Lotto) => console.log(`[${lotto.getNumbers()}]`));
  },

  printStatistics: (statistics: StatisticsInfo) => {
    console.log(OUTPUT_MESSAGE.statisticsHeader);

    statistics.forEach(([rank, count]) => {
      if (RANK[rank] === RANK.second) {
        console.log();
      }

      console.log(
        `${MATCH_COUNT[rank]}개 일치 (${PRIZE[
          rank
        ].toLocaleString()}원) - ${count}개`
      );
    });
  },

  printTotalRevenueRate: (totalRevenueRate: number) => {
    console.log(OUTPUT_MESSAGE.totalRevenueRate(totalRevenueRate));
  },
};

export default OutputView;
