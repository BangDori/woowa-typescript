import DRINK from "../../constant/menu/drink.js";

type Menu = {
  name: string;
  type: string;
  price: number;
};

class GiftEvent {
  private readonly name: string;
  private readonly item: Menu;
  private readonly required: number;

  constructor() {
    this.name = "증정 이벤트";
    this.item = DRINK["샴페인"];
    this.required = 120_000;
  }

  checkCondition(totalPrice: number): boolean {
    return totalPrice >= this.required;
  }

  provideReward() {
    return { name: this.name, item: this.item.name, reward: this.item.price };
  }
}

export default GiftEvent;
