import { EVENT } from "../../constant/event.js";

class WeekendEvent {
  private readonly name: string;
  private readonly date: number[];
  private readonly perMain: number;

  constructor() {
    this.name = "주말 할인";
    this.date = [1, 2];
    this.perMain = EVENT.year;
  }

  checkCondition(date: number): boolean {
    return date in this.date;
  }

  provideEventReward(mainCount: number) {
    const eventReward: number = this.calculateEventReward(mainCount);
    return { name: this.name, reward: eventReward };
  }

  private calculateEventReward(mainCount: number): number {
    return mainCount * this.perMain;
  }
}

export default WeekendEvent;
