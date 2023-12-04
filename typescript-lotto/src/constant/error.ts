import { LOTTO_COUNT, LOTTO_PRICE, LOTTO } from "./setting.js";

export const ERROR_PREFIX = "[ERROR] ";

export const COMMON_ERROR = Object.freeze({
  type: "숫자만 입력 가능합니다.",
});

export const MONEY_ERROR = Object.freeze({
  min: `로또를 구매하기 위해서는 최소 ${LOTTO_PRICE}원 이상 입력해주세요.`,
  unit: `로또는 ${LOTTO_PRICE}원 단위로만 입력해주세요.`,
});

export const LOTTO_ERROR = Object.freeze({
  count: `로또의 개수는 ${LOTTO_COUNT}가 되어야 합니다.`,
  duplicatedLottoNumbers: "로또 번호에 중복된 번호가 포함될 수 없습니다.",
  range: `로또 번호는 ${LOTTO.min}부터 ${LOTTO.max} 사이의 숫자여야 합니다.`,
  duplicatedBonusNumber: "보너스 번호와 로또 번호는 중복될 수 없습니다.",
});
