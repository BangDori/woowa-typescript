import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

import { INPUT_MESSAGE } from "../constant/io.js";
import { DELIMITER } from "../constant/setting.js";
import { convertStringToNumberArray } from "../util/convert.js";
import MoneyValidator from "../validator/MoneyValidator.js";
import LottoValidator from "../validator/LottoValidator.js";
import CustomError from "../error/CustomError.js";
import OutputView from "./OutputView.js";

export const rl = readline.createInterface({ input, output });

const InputView = {
  async readMoney(): Promise<number> {
    try {
      const inputMoney = await rl.question(INPUT_MESSAGE.money);
      const money = Number(inputMoney);
      MoneyValidator.validate(money);

      return money;
    } catch (error) {
      if (error instanceof CustomError) {
        OutputView.printErrorMessage(error.message);
      }
      return this.readMoney();
    }
  },

  async readWinningNumbers(): Promise<number[]> {
    try {
      const inputWinningNumbers = await rl.question(INPUT_MESSAGE.lottoNumbers);
      const winningNumbers = convertStringToNumberArray(
        inputWinningNumbers,
        DELIMITER
      );
      LottoValidator.validateLottoNumbers(winningNumbers);

      return winningNumbers;
    } catch (error) {
      if (error instanceof CustomError) {
        OutputView.printErrorMessage(error.message);
      }
      return this.readWinningNumbers();
    }
  },

  async readBonusNumber(lottoNumbers: number[]): Promise<number> {
    try {
      const inputBonusNumber = await rl.question(INPUT_MESSAGE.bonusNumber);
      const bonusNumber = Number(inputBonusNumber);
      LottoValidator.validateBonusNumber(bonusNumber, lottoNumbers);

      return bonusNumber;
    } catch (error) {
      if (error instanceof CustomError) {
        OutputView.printErrorMessage(error.message);
      }
      return this.readBonusNumber(lottoNumbers);
    }
  },
};

export default InputView;
