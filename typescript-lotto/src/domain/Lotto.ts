class Lotto {
  private readonly numbers: number[];

  constructor(numbers: number[]) {
    this.numbers = this.sortNumbers(numbers);
  }

  private sortNumbers(numbers: number[]) {
    return numbers.sort((a, b) => a - b);
  }

  getNumbers() {
    return [...this.numbers];
  }
}

export default Lotto;
