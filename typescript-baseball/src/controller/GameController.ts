import InputView, { rl } from "../view/InputView.js";
import Computer from "../domain/Computer.js";
import MatchResult from "../types/MatchResult.js";
import OutputView from "../view/OutputView.js";
import { GAME_MESSAGE } from "../constant/io.js";
import { CHOICE, TOTAL_NUMBER_COUNT } from "../constant/setting.js";
import { generateRandomNumbers } from "../util/generator.js";

class GameController {
  #computer: Computer;

  constructor() {
    this.#computer = new Computer();
  }

  async init() {
    const randomNumbers = generateRandomNumbers();
    this.#computer.setComputerNumbers(randomNumbers);
  }

  async start() {
    OutputView.printWelcome();
    await this.play();
  }

  makeResult(matchResult: MatchResult): string {
    const { strikeCount, ballCount } = matchResult;
    const result = [];

    if (strikeCount === 0 && ballCount === 0) result.push(GAME_MESSAGE.nothing);
    if (ballCount !== 0) result.push(ballCount + GAME_MESSAGE.ball);
    if (strikeCount !== 0) result.push(strikeCount + GAME_MESSAGE.strike);

    return result.join(" ");
  }

  async play(): Promise<void> {
    this.init();
    await this.playRound();

    const choice = await InputView.readChoice();
    if (choice === CHOICE.exit) {
      rl.close();
      return;
    }

    return this.play();
  }

  async playRound(): Promise<void> {
    const userNumbers = await InputView.readNumbers();

    const { strikeCount, ballCount } =
      this.#computer.compareNumbers(userNumbers);
    const result = this.makeResult({ strikeCount, ballCount });

    OutputView.printResult(result);
    if (strikeCount === TOTAL_NUMBER_COUNT) {
      OutputView.printChoice();
      return;
    }

    return this.playRound();
  }
}

export default GameController;
