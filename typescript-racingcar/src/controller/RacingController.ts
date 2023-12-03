import InputView from "../view/InputView.js";
import OutputView from "../view/OutputView.js";
import RacingBoard from "../domain/RacingBoard.js";
import { rl } from "../view/InputView.js";

class RacingController {
  async start() {
    const racingBoard: RacingBoard = await this.inputRacingBoard();

    this.play(racingBoard);
    this.over(racingBoard);
  }

  async inputRacingBoard() {
    const racingCarNames: string[] = await InputView.readRacingCarNames();
    const totalRound: number = await InputView.readTotalRound();

    return new RacingBoard(racingCarNames, totalRound);
  }

  play(racingBoard: RacingBoard) {
    OutputView.printPlayResult();

    for (let i = 0; i < racingBoard.getTotalRound(); i += 1) {
      racingBoard.playRound();

      const racingState: string = racingBoard.getRacingState();
      OutputView.printRacingCarState(racingState);
      OutputView.printLineBreak();
    }
  }

  over(racingBoard: RacingBoard) {
    const finalWinner: string = racingBoard.getFinalWinner();
    OutputView.printFinalWinner(finalWinner);
    rl.close();
  }
}

export default RacingController;
