import { ERROR_MESSAGE } from "../constant/message/error.js";
import CustomError from "../error/CustomError.js";

const datePattern = /^\d+$/;
const menuPattern = /^[가-힣]+-\d+(,[가-힣]+-\d+)*$/;

class InputValidator {
  static validateInputDate(inputDate: string) {
    if (!datePattern.test(inputDate)) {
      throw new CustomError(ERROR_MESSAGE.date);
    }
  }

  static validateInputMenus(inputMenus: string) {
    if (!menuPattern.test(inputMenus)) {
      throw new CustomError(ERROR_MESSAGE.menu);
    }
  }
}

export default InputValidator;
