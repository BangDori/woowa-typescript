import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

import { INPUT_MESSAGE } from "../constant/io.js";
import { convertStringToNumberList } from "../util/converter.js";
import NumberValidator from "../validator/NumberValidator.js";
import ChoiceValidator from "../validator/ChoiceValidator.js";

export const rl = readline.createInterface({ input, output });

const InputView = {
  async readNumbers() {
    const inputNumbers = await rl.question(INPUT_MESSAGE.numbers);

    NumberValidator.validate(inputNumbers);
    const numbers = convertStringToNumberList(inputNumbers);
    return numbers;
  },

  async readChoice() {
    const inputChoice = await rl.question(INPUT_MESSAGE.choice);

    ChoiceValidator.validate(inputChoice);
    return inputChoice;
  },
};

export default InputView;
