import { LOTTO } from "../constant/lotto.js";
import { COMMON_ERROR, LOTTO_ERROR } from "../constant/message/error.js";
import CustomError from "../error/CustomError.js";

class CommonValidator {
  static validateIsNaN(number: number) {
    if (isNaN(number)) {
      throw new CustomError(COMMON_ERROR.type);
    }
  }

  static validateLottoNumberRange(lottoNumber: number) {
    if (lottoNumber < LOTTO.min || lottoNumber > LOTTO.max) {
      throw new CustomError(LOTTO_ERROR.range);
    }
  }
}

export default CommonValidator;
