import { ERROR_MESSAGE } from "../constant/error.js";
import CustomError from "../error/CustomError.js";
import { MINIMAL_RACING_CAR } from "../constant/setting.js";

class RacingCarValidator {
  static validate(racingCarNames: string[]) {
    this.validateMinRacingCar(racingCarNames);
    this.validateSpace(racingCarNames);
    this.validateDuplication(racingCarNames);
  }

  static validateMinRacingCar(racingCarNames: string[]) {
    if (racingCarNames.length < MINIMAL_RACING_CAR) {
      throw new CustomError(ERROR_MESSAGE.car);
    }
  }

  static validateSpace(racingCarNames: string[]) {
    racingCarNames.forEach((racingCarName: string) => {
      if (racingCarName.length !== racingCarName.trim().length) {
        throw new CustomError(ERROR_MESSAGE.space);
      }
    });
  }

  static validateDuplication(racingCarNames: string[]) {
    const uniqueRacingCarNames = new Set(racingCarNames);

    if (uniqueRacingCarNames.size !== racingCarNames.length) {
      throw new CustomError(ERROR_MESSAGE.duplication);
    }
  }
}

export default RacingCarValidator;
