class RacingCar {
  #name: string;
  #distance: number;

  constructor(name: string) {
    this.#name = name;
    this.#distance = 0;
  }

  forwardCar() {
    this.#distance += 1;
  }

  getName(): string {
    return this.#name;
  }

  getDistance(): number {
    return this.#distance;
  }

  getRacingCarState(): string {
    return `${this.#name} : ${"-".repeat(this.#distance)}`;
  }
}

export default RacingCar;
