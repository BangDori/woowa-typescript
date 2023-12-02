import { ERROR_MESSAGE } from "../constant/error.js";
import { NUMBER, TOTAL_NUMBER_COUNT } from "../constant/setting.js";
import CustomError from "../error/CustomError.js";

class NumberValidator {
  static validate(numbers: string) {
    const numberList = numbers.split("");

    this.validateLength(numberList);
    this.validateNumber(numberList);
    this.validateNumberRange(numberList);
    this.validateDuplicatedNumbers(numberList);
  }

  static validateLength(numberList: string[]) {
    if (numberList.length !== TOTAL_NUMBER_COUNT) {
      throw new CustomError(ERROR_MESSAGE.length);
    }
  }

  static validateNumber(numberList: string[]) {
    numberList.forEach((number) => {
      if (isNaN(Number(number))) {
        throw new CustomError(ERROR_MESSAGE.number);
      }
    });
  }

  static validateNumberRange(numberList: string[]) {
    numberList.forEach((number) => {
      if (Number(number) < NUMBER.min || Number(number) > NUMBER.max) {
        throw new CustomError(ERROR_MESSAGE.range);
      }
    });
  }

  static validateDuplicatedNumbers(numberList: string[]) {
    const uniqueNumbers = new Set(numberList);

    if (uniqueNumbers.size !== TOTAL_NUMBER_COUNT) {
      throw new CustomError(ERROR_MESSAGE.duplicated);
    }
  }
}

export default NumberValidator;
