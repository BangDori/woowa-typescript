import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
import { INPUT_MESSAGE } from "../constant/message/io.js";
import OutputView from "../view/OutputView.js";
import { Menu } from "../types/Menu.js";
import { convertStringToMenuList } from "../util/converter.js";

import InputValidator from "../validator/InputValidator.js";
import DateValidator from "../validator/DateValidator.js";
import MenuValidator from "../validator/MenuValidator.js";

export const rl = readline.createInterface({ input, output });

const InputView = {
  async readDate(): Promise<number> {
    try {
      const inputDate = await rl.question(INPUT_MESSAGE.date);
      InputValidator.validateInputDate(inputDate);

      const date = Number(inputDate);
      DateValidator.validate(date);

      return date;
    } catch (error) {
      if (error instanceof Error) OutputView.printErrorMessage(error.message);
      return this.readDate();
    }
  },

  async readMenuList(): Promise<Menu[]> {
    try {
      const inputMenus = await rl.question(INPUT_MESSAGE.menu);
      InputValidator.validateInputMenus(inputMenus);

      const menuList = convertStringToMenuList(inputMenus, ",", "-");
      MenuValidator.validate(menuList);

      return menuList;
    } catch (error) {
      if (error instanceof Error) OutputView.printErrorMessage(error.message);
      return this.readMenuList();
    }
  },
};

export default InputView;
