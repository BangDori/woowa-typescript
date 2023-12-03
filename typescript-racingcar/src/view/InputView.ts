import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

import { INPUT_MESSAGE } from "../constant/io.js";
import RacingCarValidator from "../validator/RacingCarValidator.js";
import TotalRoundValidator from "../validator/TotalRoundValidator.js";

export const rl = readline.createInterface({ input, output });

const InputView = {
  async readRacingCarNames(): Promise<string[]> {
    const inputRacingCarNames: string = await rl.question(
      INPUT_MESSAGE.racingCarNames
    );
    const racingCarNames: string[] = inputRacingCarNames.split(",");
    RacingCarValidator.validate(racingCarNames);

    return racingCarNames;
  },

  async readTotalRound(): Promise<number> {
    const inputTotalRound: string = await rl.question(INPUT_MESSAGE.totalRound);
    const totalRound = Number(inputTotalRound);
    TotalRoundValidator.validate(totalRound);

    return totalRound;
  },
};

export default InputView;
