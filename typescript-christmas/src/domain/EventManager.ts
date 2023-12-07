import { EventInfo, GiftEventInfo } from "../types/Event.js";

class EventManager {
  private gift: GiftEventInfo;
  private event: EventInfo[];

  constructor() {
    this.gift = undefined;
    this.event = [];
  }

  applyGiftEvent(eventName: string, eventItem: string) {
    this.gift = [eventName, eventItem];
  }

  applyDiscountEvent(eventName: string, discount: number) {
    this.event = this.event.concat([eventName, discount]);
  }

  getGift() {
    return this.gift;
  }

  getAllEvent() {
    return [...this.event];
  }

  getTotalEventDiscount() {
    return this.event.reduce((totalDiscount, [namae, price]) => {
      return totalDiscount + price;
    }, 0);
  }
}

export default EventManager;
