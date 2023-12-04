import LottoController from "./controller/LottoController.js";
import Lotto from "./domain/Lotto.js";
import OutputView from "./view/OutputView.js";

class App {
  async play() {
    const lottoController = new LottoController();

    const lottos: Lotto[] = await lottoController.buyLottos();
    OutputView.printLottos(lottos);

    const winningNumber = await lottoController.setWinningNumber();
    lottoController.compareLottos(lottos, winningNumber);
  }
}

export default App;
