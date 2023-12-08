class ChristmasEvent {
  private readonly name: string;
  private readonly date: number;
  private readonly base: number;
  private readonly perDate: number;

  constructor() {
    this.name = "크리스마스 디데이 할인";
    this.date = 25;
    this.base = 900;
    this.perDate = 100;
  }

  checkCondition(date: number): boolean {
    return date <= this.date;
  }

  provideEventReward(date: number) {
    const eventReward: number = this.calculateEventReward(date);
    return { name: this.name, reward: eventReward };
  }

  private calculateEventReward(date: number): number {
    return date * this.perDate + this.base;
  }
}

export default ChristmasEvent;
