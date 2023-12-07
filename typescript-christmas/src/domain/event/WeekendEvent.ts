import EventManager from "../EventManager.js";
import { EVENT } from "../../constant/event.js";

class WeekendEvent extends EventManager {
  private readonly name: string;
  private readonly date: number[];
  private readonly perMain: number;

  constructor() {
    super();

    this.name = "주말 할인";
    this.date = [1, 2];
    this.perMain = EVENT.year;
  }

  checkCondition(date: number): boolean {
    return date in this.date;
  }

  calculateEventReward(mainCount: number): number {
    return mainCount * this.perMain;
  }

  provideEventReward(mainCount: number) {
    const eventReward: number = this.calculateEventReward(mainCount);
    this.applyDiscountEvent(this.name, eventReward);
  }
}

export default WeekendEvent;
