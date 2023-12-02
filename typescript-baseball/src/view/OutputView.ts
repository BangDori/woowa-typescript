import { OUTPUT_MESSAGE } from "../constant/io.js";

const OutputView = {
  printWelcome() {
    console.log(OUTPUT_MESSAGE.welcome);
  },

  printResult(result: string) {
    console.log(result);
  },

  printChoice() {
    console.log(OUTPUT_MESSAGE.gameOver);
  },
};

export default OutputView;
