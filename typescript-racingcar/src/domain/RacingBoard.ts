import RacingCar from "./RacingCar.js";
import { isForward } from "../util/util.js";

class RacingBoard {
  #racingCars: RacingCar[];
  #totalRound: number;

  constructor(racingCarNames: string[], totalRound: number) {
    this.#racingCars = racingCarNames.map(
      (racingCarName) => new RacingCar(racingCarName)
    );
    this.#totalRound = totalRound;
  }

  playRound() {
    this.#racingCars.forEach((racingCar: RacingCar) => {
      if (isForward()) {
        racingCar.forwardCar();
      }
    });
  }

  getRacingState() {
    return this.#racingCars
      .map((racingCar) => racingCar.getRacingCarState())
      .join("\n");
  }

  getMaxDistance(): number {
    return this.#racingCars.reduce((maxDistance, racingCar) => {
      const distance = racingCar.getDistance();
      return Math.max(maxDistance, distance);
    }, 0);
  }

  getFinalWinner(): string {
    const maxDistance = this.getMaxDistance();

    return this.#racingCars
      .filter((racingCar) => racingCar.getDistance() === maxDistance)
      .map((racingCar) => racingCar.getName())
      .join(",");
  }

  getTotalRound() {
    return this.#totalRound;
  }
}

export default RacingBoard;
