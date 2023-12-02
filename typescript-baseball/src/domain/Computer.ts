import MatchResult from "../types/MatchResult.js";

class Computer {
  #numbers: number[];

  constructor() {
    this.#numbers = [];
  }

  setComputerNumbers(numbers: number[]) {
    this.#numbers = numbers;
  }

  compareNumbers(userNumbers: number[]): MatchResult {
    let strikeCount = 0;
    let ballCount = 0;

    this.#numbers.forEach((number, index) => {
      if (userNumbers[index] === number) {
        strikeCount += 1;
      } else if (userNumbers.includes(number)) {
        ballCount += 1;
      }
    });

    return { strikeCount, ballCount };
  }
}

export default Computer;
