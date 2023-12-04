import Lotto from "../domain/Lotto.js";
import InputView from "../view/InputView.js";
import LottoMachine from "../domain/LottoMachine.js";
import WinningNumber from "../domain/WinningNumber.js";
import MatchResult from "../types/MatchResult.js";
import Statistics from "../domain/Statistics.js";

class LottoController {
  private readonly lottoMachine: LottoMachine;
  private readonly statistics: Statistics;

  constructor() {
    this.lottoMachine = new LottoMachine();
    this.statistics = new Statistics();
  }

  async buyLottos(): Promise<Lotto[]> {
    const money: number = await InputView.readMoney();
    const lottos: Lotto[] = this.lottoMachine.buyLottos(money);

    return lottos;
  }

  async setWinningNumber(): Promise<WinningNumber> {
    const winningNumbers: number[] = await InputView.readWinningNumbers();
    const bonusNumber: number = await InputView.readBonusNumber(winningNumbers);

    return new WinningNumber(winningNumbers, bonusNumber);
  }

  async compareLottos(lottos: Lotto[], winningNumber: WinningNumber) {
    lottos.forEach((lotto: Lotto) => {
      const lottoNumbers: number[] = lotto.getNumbers();
      const matchResult: MatchResult = winningNumber.compareLotto(lottoNumbers);
      this.statistics.updateMatchResult(matchResult);
    });
  }
}

export default LottoController;