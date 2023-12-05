import LottoController from "./controller/LottoController.js";
import StatisticsController from "./controller/StatisticsController.js";
import Lotto from "./domain/Lotto.js";
import MatchResult from "./types/MatchResult.js";
import { rl } from "./view/InputView.js";

class App {
  private readonly lottoController: LottoController;
  private readonly statisticsController: StatisticsController;

  constructor() {
    this.lottoController = new LottoController();
    this.statisticsController = new StatisticsController();
  }

  async play() {
    const lottos: Lotto[] = await this.lottoController.buyLottos();
    const winningNumber = await this.lottoController.setWinningNumber();
    const result: MatchResult[] = this.lottoController.compareLottos(
      lottos,
      winningNumber
    ); // 결과를 받아옴

    const statistics =
      this.statisticsController.makeStatisticsBasedResult(result);
    this.statisticsController.showTotalRevenueRate(statistics);
    rl.close();
  }
}

export default App;
