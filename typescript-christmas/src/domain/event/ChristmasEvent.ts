import EventManager from "../EventManager.js";
import { CHRISTMAS_EVENT } from "../../constant/event.js";

class ChristmasEvent extends EventManager {
  private readonly name: string;
  private readonly date: number;
  private readonly base: number;
  private readonly perDate: number;

  constructor() {
    super();

    this.name = "크리스마스 디데이 할인";
    this.date = 25;
    this.base = 900;
    this.perDate = 100;
  }

  checkCondition(date: number): boolean {
    return date <= CHRISTMAS_EVENT.date;
  }

  calculateEventReward(date: number): number {
    return date * CHRISTMAS_EVENT.perDate + CHRISTMAS_EVENT.base;
  }

  provideEventReward(date: number) {
    const eventReward: number = this.calculateEventReward(date);
    this.applyDiscountEvent(CHRISTMAS_EVENT.name, eventReward);
  }
}

export default ChristmasEvent;
