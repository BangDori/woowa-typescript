import MatchResult from "../types/MatchResult.js";

class WinningNumber {
  private readonly winningNumbers: number[];
  private readonly bonusNumber: number;

  constructor(winningNumbers: number[], bonusNumber: number) {
    this.winningNumbers = winningNumbers;
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
    return this.winningNumbers.includes(lottoNumber);
  }

  includeBonusNumber(lottoNumbers: number[]): boolean {
    return lottoNumbers.includes(this.bonusNumber);
  }
}

export default WinningNumber;
