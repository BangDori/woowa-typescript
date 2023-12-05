import Lotto from "../domain/Lotto.js";
import { OUTPUT_MESSAGE } from "../constant/io.js";

const OutputView = {
  printErrorMessage: (errorMessage: string) => {
    console.log(errorMessage);
  },

  printLottos: (lottos: Lotto[]) => {
    console.log(`\n${lottos.length}개를 구매했습니다.`);
    lottos.forEach((lotto: Lotto) => console.log(`[${lotto.getNumbers()}]`));
  },

  printStatisticsHeader: () => {
    console.log(OUTPUT_MESSAGE.statisticsHeader);
  },

  printSecondInfo: (matchCount: number, prize: string, count: number) => {
    console.log(OUTPUT_MESSAGE.secondInfo(matchCount, prize, count));
  },

  printStatisticsInfo: (matchCount: number, prize: string, count: number) => {
    console.log(OUTPUT_MESSAGE.statisticsInfo(matchCount, prize, count));
  },

  printTotalRevenueRate: (totalRevenueRate: number) => {
    console.log(OUTPUT_MESSAGE.totalRevenueRate(totalRevenueRate));
  },
};

export default OutputView;
