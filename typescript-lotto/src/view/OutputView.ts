import Lotto from "../domain/Lotto.js";

const OutputView = {
  printErrorMessage: (errorMessage: string) => {
    console.log(errorMessage);
  },

  printLottos: (lottos: Lotto[]) => {
    console.log(`\n${lottos.length}개를 구매했습니다.`);
    lottos.forEach((lotto: Lotto) => console.log(`[${lotto.getNumbers()}]`));
  },
};

export default OutputView;
