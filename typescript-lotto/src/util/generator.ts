import { LOTTO } from "../constant/lotto.js";

export function generateLottoNumbers(): number[] {
  const lottoNumbers = new Set<number>();

  while (lottoNumbers.size < LOTTO.count) {
    const lottoNumber: number = getRandomNumber();
    lottoNumbers.add(lottoNumber);
  }

  return [...lottoNumbers];
}

function getRandomNumber(): number {
  return Math.floor(Math.random() * LOTTO.max) + 1;
}
