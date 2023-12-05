import MatchResult from "../types/MatchResult.js";
import Lotto from "./Lotto.js";

class WinningLotto extends Lotto {
  private readonly bonusNumber: number;

  constructor(winningNumbers: number[], bonusNumber: number) {
    super(winningNumbers);
    this.bonusNumber = bonusNumber;
  }

  compareLotto(lottoNumbers: number[]): MatchResult {
    const isBonus = this.includeBonusNumber(lottoNumbers);
    const matchCount = lottoNumbers.reduce(
      (count: number, lottoNumber: number) => {
        if (this.includeWinningNumbers(lottoNumber)) {
          return count + 1;
        }

        return count;
      },
      0
    );

    return { matchCount, isBonus };
  }

  includeWinningNumbers(lottoNumber: number): boolean {
    const winningNumbers = this.getNumbers();
    return winningNumbers.includes(lottoNumber);
  }

  includeBonusNumber(lottoNumbers: number[]): boolean {
    return lottoNumbers.includes(this.bonusNumber);
  }
}

export default WinningLotto;
