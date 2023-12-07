import EventManager from "../EventManager.js";

class SpecialEvent extends EventManager {
  private readonly name: string;
  private readonly date: number[];
  private readonly discount: number;

  constructor() {
    super();

    this.name = "특별 할인";
    this.date = [3, 10, 17, 24, 25, 31];
    this.discount = 1_000;
  }

  checkCondition(date: number): boolean {
    return date in this.date;
  }

  provideEventReward() {
    this.applyDiscountEvent(this.name, this.discount);
  }
}

export default SpecialEvent;
