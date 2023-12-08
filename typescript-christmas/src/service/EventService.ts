import { Reward } from "../types/Event.js";
import EventManager from "../domain/EventManager.js";
import BadgeEvent from "../domain/event/BadgeEvent.js";
import ChristmasEvent from "../domain/event/ChristmasEvent.js";
import GiftEvent from "../domain/event/GiftEvent.js";
import SpecialEvent from "../domain/event/SpecialEvent.js";
import WeekdayEvent from "../domain/event/WeekdayEvent.js";
import WeekendEvent from "../domain/event/WeekendEvent.js";
import Order from "../domain/Order.js";
import { MAIN_MENU } from "../constant/menu/MAIN.js";
import { DESSERT_MENU } from "../constant/menu/dessert.js";

class EventService {
  makeEventManager() {
    return new EventManager();
  }

  checkChristmasEvent(date: number, eventManager: EventManager) {
    const christmasEvent: ChristmasEvent = new ChristmasEvent();

    if (christmasEvent.checkCondition(date)) {
      const christmasReward: Reward = christmasEvent.provideEventReward(date);
      eventManager.applyDiscountEvent(christmasReward);
    }
  }

  checkSpecialEvent(date: number, eventManager: EventManager) {
    const specialEvent: SpecialEvent = new SpecialEvent();

    if (specialEvent.checkCondition(date)) {
      const specialReward: Reward = specialEvent.provideEventReward();
      eventManager.applyDiscountEvent(specialReward);
    }
  }

  checkWeekdayEvent(order: Order, eventManager: EventManager) {
    const weekdayEvent: WeekdayEvent = new WeekdayEvent();
    const date: number = order.getDate();

    if (weekdayEvent.checkCondition(date)) {
      const dessertCount = order.getCountByType(DESSERT_MENU);
      const weekdayReward: Reward =
        weekdayEvent.provideEventReward(dessertCount);
      eventManager.applyDiscountEvent(weekdayReward);
    }
  }

  checkWeekendEvent(order: Order, eventManager: EventManager) {
    const weekendEvent: WeekendEvent = new WeekendEvent();
    const date: number = order.getDate();

    if (weekendEvent.checkCondition(date)) {
      const mainCount = order.getCountByType(MAIN_MENU);
      const weekendReward = weekendEvent.provideEventReward(mainCount);
      eventManager.applyDiscountEvent(weekendReward);
    }
  }

  checkGiftReward(totalPrice: number, eventManager: EventManager) {
    const giftEvent: GiftEvent = new GiftEvent();

    if (giftEvent.checkCondition(totalPrice)) {
      const giftReward = giftEvent.provideReward();
      eventManager.applyGiftEvent(giftReward);
    }
  }

  checkBadgeEvent(totalReward: number): string {
    const badgeEvent: BadgeEvent = new BadgeEvent();

    return badgeEvent.getBadge(totalReward);
  }
}

export default EventService;
