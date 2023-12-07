import EventManager from "../EventManager.js";
import DRINK from "../../constant/menu/drink.js";

class GiftEvent extends EventManager {
  private readonly name: string;
  private readonly item: string;
  private readonly required: number;

  constructor() {
    super();

    this.name = "증정 이벤트";
    this.item = DRINK["샴페인"].name;
    this.required = 120_000;
  }

  checkCondition(totalPrice: number): boolean {
    return totalPrice >= this.required;
  }

  provideChampagne() {
    this.applyGiftEvent(this.name, this.item);
  }
}

export default GiftEvent;
