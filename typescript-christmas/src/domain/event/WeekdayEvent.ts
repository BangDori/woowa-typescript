import { Reward } from "src/types/Event.js";
import { EVENT } from "../../constant/event.js";

class WeekdayEvent {
  private readonly name: string;
  private readonly date: number[];
  private readonly perDessert: number;

  constructor() {
    this.name = "평일 할인";
    this.date = [3, 4, 5, 6, 0];
    this.perDessert = EVENT.year;
  }

  checkCondition(date: number): boolean {
    return date in this.date;
  }

  provideEventReward(dessertCount: number): Reward {
    const eventReward: number = this.calculateEventReward(dessertCount);
    return { name: this.name, reward: eventReward };
  }

  private calculateEventReward(dessertCount: number): number {
    return dessertCount * this.perDessert;
  }
}

export default WeekdayEvent;
