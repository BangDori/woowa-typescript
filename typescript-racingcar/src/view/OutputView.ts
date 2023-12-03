import { OUTPUT_MESSAGE } from "../constant/io.js";

const OutputView = {
  printPlayResult() {
    console.log(OUTPUT_MESSAGE.playResult);
  },

  printRacingCarState(racingCarState: string) {
    console.log(racingCarState);
  },

  printFinalWinner(finalWinner: string) {
    console.log(OUTPUT_MESSAGE.finalWinner + finalWinner);
  },

  printLineBreak() {
    console.log();
  },
};

export default OutputView;
