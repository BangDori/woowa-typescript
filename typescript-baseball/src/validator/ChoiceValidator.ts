import { ERROR_MESSAGE } from "../constant/error.js";
import { CHOICE } from "../constant/setting.js";
import CustomError from "../error/CustomError.js";

class ChoiceValidator {
  static validate(choice: string) {
    if (choice !== CHOICE.restart && choice !== CHOICE.exit) {
      throw new CustomError(ERROR_MESSAGE.choice);
    }
  }
}

export default ChoiceValidator;
