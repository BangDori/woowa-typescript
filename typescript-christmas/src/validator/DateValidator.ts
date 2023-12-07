import { EVENT } from "../constant/event.js";
import { ERROR_MESSAGE } from "../constant/message/error.js";
import CustomError from "../error/CustomError.js";

class DateValidator {
  static validate(date: number) {
    this.validateNumberInRange(date);
  }

  static validateNumberInRange(date: number) {
    if (date < EVENT.startDate || date > EVENT.endDate) {
      throw new CustomError(ERROR_MESSAGE.date);
    }
  }
}

export default DateValidator;
