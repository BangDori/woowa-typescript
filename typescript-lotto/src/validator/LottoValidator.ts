import { LOTTO_ERROR } from "../constant/error.js";
import { LOTTO_COUNT } from "../constant/setting.js";
import CustomError from "../error/CustomError.js";
import CommonValidator from "./CommonValidator.js";

class LottoValidator {
  static validateLottoNumbers(lottoNumbers: number[]) {
    this.validateIsNaN(lottoNumbers);
    this.validateLottoCount(lottoNumbers);
    this.validateDuplicateNumber(lottoNumbers);
    this.validateLottoNumbersRange(lottoNumbers);
  }

  static validateBonusNumber(bonusNumber: number, lottoNumbers: number[]) {
    CommonValidator.validateIsNaN(bonusNumber);
    CommonValidator.validateLottoNumberRange(bonusNumber);
    this.validateDuplicateBonusNumber(bonusNumber, lottoNumbers);
  }

  static validateIsNaN(lottoNumbers: number[]) {
    lottoNumbers.forEach((lottoNumber) => {
      CommonValidator.validateIsNaN(lottoNumber);
    });
  }

  static validateLottoCount(lottoNumbers: number[]) {
    if (lottoNumbers.length !== LOTTO_COUNT) {
      throw new CustomError(LOTTO_ERROR.count);
    }
  }

  static validateDuplicateNumber(lottoNumbers: number[]) {
    const uniqueLottoNumbers = new Set(lottoNumbers);

    if (uniqueLottoNumbers.size !== lottoNumbers.length) {
      throw new CustomError(LOTTO_ERROR.duplicatedLottoNumbers);
    }
  }

  static validateLottoNumbersRange(lottoNumbers: number[]) {
    lottoNumbers.forEach((lottoNumber: number) =>
      CommonValidator.validateLottoNumberRange(lottoNumber)
    );
  }

  static validateDuplicateBonusNumber(
    bonusNumber: number,
    lottoNumbers: number[]
  ) {
    if (lottoNumbers.includes(bonusNumber)) {
      throw new CustomError(LOTTO_ERROR.duplicatedBonusNumber);
    }
  }
}

export default LottoValidator;
