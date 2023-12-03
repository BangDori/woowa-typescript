import { MINIMAL_RACING_CAR, MINIMAL_TOTAL_ROUND } from "./setting.js";

export const ERROR_PREFIX = "[ERROR] ";
export const ERROR_MESSAGE = Object.freeze({
  car: `자동차는 최소 ${MINIMAL_RACING_CAR}대 이상이어야 합니다.`,
  space: "자동차 이름에 공백이 포함될 수 없습니다.",
  duplication: "중복된 자동차가 포함될 수 없습니다.",

  number: "시도 횟수는 숫자만 입력할 수 있습니다.",
  min: `시도 횟수는 최소 ${MINIMAL_TOTAL_ROUND} 이상이어야 합니다.`,
});
