import { NUMBER, TOTAL_NUMBER_COUNT } from "../constant/setting.js";

export function generateRandomNumbers(): number[] {
  const numbers = new Set<number>();

  while (numbers.size < TOTAL_NUMBER_COUNT) {
    const randomNumber = Math.floor(Math.random() * NUMBER.max) + 1;
    numbers.add(randomNumber);
  }

  return [...numbers];
}
