import Lotto from "../domain/Lotto.js";
import InputView from "../view/InputView.js";
import LottoService from "../service/LottoService.js";

import WinningNumber from "../domain/WinningLotto.js";
import MatchResult from "../types/MatchResult.js";
import OutputView from "../view/OutputView.js";

class LottoController {
  // Domain보다는 Service의 역할에 가까움. lottoMachine -> lottoService
  private readonly lottoService: LottoService;

  constructor() {
    this.lottoService = new LottoService();
  }

  async buyLottos(): Promise<Lotto[]> {
    const money: number = await InputView.readMoney();
    const lottos: Lotto[] = this.lottoService.buyLottos(money);

    OutputView.printLottos(lottos);

    return lottos;
  }

  async setWinningNumber(): Promise<WinningNumber> {
    const winningNumbers: number[] = await InputView.readWinningNumbers();
    const bonusNumber: number = await InputView.readBonusNumber(winningNumbers);
    const winningLotto = this.lottoService.makeWinningLotto(
      winningNumbers,
      bonusNumber
    );

    return winningLotto; // Service 추출 고려
  }

  compareLottos(lottos: Lotto[], winningNumber: WinningNumber) {
    return lottos.map((lotto: Lotto) => {
      const lottoNumbers: number[] = lotto.getNumbers();
      const matchResult: MatchResult = winningNumber.compareLotto(lottoNumbers);

      // this.statistics.updateMatchResult(matchResult); // update 로직이 너무 많이 발생함
      return matchResult;
    });
  }
}

export default LottoController;
