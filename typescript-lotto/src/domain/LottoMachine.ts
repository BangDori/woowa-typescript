import { LOTTO_PRICE } from "../constant/setting.js";
import Lotto from "./Lotto.js";
import { generateLottoNumbers } from "../util/generator.js";

class LottoMachine {
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
}

export default LottoMachine;
