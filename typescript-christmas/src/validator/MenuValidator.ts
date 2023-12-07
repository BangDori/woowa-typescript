import { Menu } from "../types/Menu.js";
import MENU_BOARD from "../constant/menu.js";
import { DRINK_MENU } from "../constant/menu/drink.js";
import { ERROR_MESSAGE } from "../constant/message/error.js";
import CustomError from "../error/CustomError.js";
import { getCountByType } from "../util/counter.js";

class MenuValidator {
  static validate(menuList: Menu[]) {
    const names = menuList.map((menu) => menu[0]);

    this.validateExistMenu(names);
    this.validateDuplicatedMenu(names);
    this.validateOnlyDrink(names);

    const totalCount = menuList.reduce((count, menu) => count + menu[1], 0);
    this.validateMenuCount(totalCount);
  }

  static validateExistMenu(names: string[]) {
    names.forEach((name) => {
      if (!MENU_BOARD[name]) {
        throw new CustomError(ERROR_MESSAGE.menu);
      }
    });
  }

  static validateDuplicatedMenu(names: string[]) {
    const uniqueNames = new Set(names);

    if (uniqueNames.size !== names.length) {
      throw new CustomError(ERROR_MESSAGE.menu);
    }
  }

  static validateOnlyDrink(names: string[]) {
    const drinkCount = getCountByType(names, DRINK_MENU);

    if (drinkCount === names.length) {
      throw new CustomError(ERROR_MESSAGE.menu);
    }
  }

  static validateMenuCount(count: number) {
    if (count < 1 || count > 20) {
      throw new CustomError(ERROR_MESSAGE.menu);
    }
  }
}

export default MenuValidator;
