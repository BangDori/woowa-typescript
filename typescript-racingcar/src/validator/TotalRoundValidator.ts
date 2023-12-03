import { ERROR_MESSAGE } from "../constant/error.js";
import CustomError from "../error/CustomError.js";
import { MINIMAL_TOTAL_ROUND } from "../constant/setting.js";

class TotalRoundValidator {
  static validate(totalRound: number) {
    this.validateIsNumber(totalRound);
    this.validateMinNumber(totalRound);
  }

  static validateIsNumber(totalRound: number) {
    if (isNaN(totalRound)) {
      throw new CustomError(ERROR_MESSAGE.number);
    }
  }

  static validateMinNumber(totalRound: number) {
    if (totalRound < MINIMAL_TOTAL_ROUND) {
      throw new CustomError(ERROR_MESSAGE.min);
    }
  }
}

export default TotalRoundValidator;
