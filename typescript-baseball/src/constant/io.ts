import { CHOICE, TOTAL_NUMBER_COUNT } from "./setting.js";

export const INPUT_MESSAGE = Object.freeze({
  numbers: "숫자를 입력해주세요 : ",
  choice: `게임을 새로 시작하려면 ${CHOICE.restart}, 종료하려면 ${CHOICE.exit}를 입력하세요.\n`,
});

export const OUTPUT_MESSAGE = Object.freeze({
  welcome: "숫자 야구 게임을 시작합니다.",
  gameOver: `${TOTAL_NUMBER_COUNT}개의 숫자를 모두 맞히셨습니다! 게임 종료`,
});

export const GAME_MESSAGE = Object.freeze({
  ball: "볼",
  strike: "스트라이크",
  nothing: "낫싱",
});
