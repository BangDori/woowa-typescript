import { FORWARD_THRESHOLD, RANDOM_NUMBERS } from "../constant/setting.js";

function generateRandomNumber(): number {
  return Math.floor(Math.random() * RANDOM_NUMBERS.max) + 1;
}

export function isForward(): boolean {
  return generateRandomNumber() >= FORWARD_THRESHOLD;
}
