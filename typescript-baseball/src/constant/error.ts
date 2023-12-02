import { CHOICE, NUMBER, TOTAL_NUMBER_COUNT } from "./setting.js";

export const ERROR_PREFIX = "[ERROR] ";

export const ERROR_MESSAGE = Object.freeze({
  length: `숫자는 ${TOTAL_NUMBER_COUNT}자리로 구성되어야 합니다.`,
  number: "숫자로만 구성되어질 수 있습니다.",
  range: `숫자는 ${NUMBER.min}에서 ${NUMBER.max}까지만 가능합니다.`,
  duplicated: "중복된 숫자가 포함될 수 없습니다.",
  choice: `${CHOICE.restart}과 ${CHOICE.exit}만 입력 가능합니다.`,
});
