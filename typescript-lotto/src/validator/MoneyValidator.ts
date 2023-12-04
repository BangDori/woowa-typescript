import { MONEY_ERROR } from "../constant/error.js";
import { LOTTO_PRICE, ZERO } from "../constant/setting.js";
import CustomError from "../error/CustomError.js";
import CommonValidator from "./CommonValidator.js";

class MoneyValidator {
  static validate(money: number) {
    CommonValidator.validateIsNaN(money);
    this.validateMinMoney(money);
    this.validateMoneyUnit(money);
  }

  static validateMinMoney(money: number) {
    if (money < LOTTO_PRICE) {
      throw new CustomError(MONEY_ERROR.min);
    }
  }

  static validateMoneyUnit(money: number) {
    if (money % LOTTO_PRICE !== ZERO) {
      throw new CustomError(MONEY_ERROR.unit);
    }
  }
}

export default MoneyValidator;
