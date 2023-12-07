import EventManager from "../EventManager.js";
import { EVENT } from "../../constant/event.js";

class WeekdayEvent extends EventManager {
  private readonly name: string;
  private readonly date: number[];
  private readonly perDessert: number;

  constructor() {
    super();

    this.name = "평일 할인";
    this.date = [3, 4, 5, 6, 0];
    this.perDessert = EVENT.year;
  }

  checkCondition(date: number): boolean {
    return date in this.date;
  }

  calculateEventReward(dessertCount: number): number {
    return dessertCount * this.perDessert;
  }

  provideEventReward(dessertCount: number) {
    const eventReward: number = this.calculateEventReward(dessertCount);
    this.applyDiscountEvent(this.name, eventReward);
  }
}

export default WeekdayEvent;
