import WinningLotto from "../domain/WinningLotto.js";
import { LOTTO_PRICE } from "../constant/lotto.js";
import Lotto from "../domain/Lotto.js";
import { generateLottoNumbers } from "../util/generator.js";

class LottoService {
  buyLottos(money: number) {
    const lottoCount = money / LOTTO_PRICE;
    const lottos: Lotto[] = [];

    for (let i = 0; i < lottoCount; i += 1) {
      const lotto = this.makeLotto();
      lottos.push(lotto);
    }

    return lottos;
  }

  makeLotto() {
    const lottoNumbers: number[] = generateLottoNumbers();
    return new Lotto(lottoNumbers);
  }

  makeWinningLotto(winningNumbers: number[], bonusNumber: number) {
    const winningLotto = new WinningLotto(winningNumbers, bonusNumber);
    return winningLotto;
  }
}

export default LottoService;
