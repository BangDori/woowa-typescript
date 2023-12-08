import Order from "../domain/Order.js";
import EventManager from "../domain/EventManager.js";
import EventService from "../service/EventService.js";
import OutputView from "../view/OutputView.js";
import { Reward } from "../types/Event.js";
import { MIN_EVENT_JOIN_PRICE } from "../constant/event.js";

class EventController {
  private readonly eventService: EventService;

  constructor() {
    this.eventService = new EventService();
  }

  play(order: Order) {
    const eventManager: EventManager = this.eventService.makeEventManager();

    this.checkGiftEvent(order, eventManager);
    this.checkDiscountEvent(order, eventManager);
    this.showEventList(order, eventManager);

    this.checkBadgeEvent(eventManager);
  }

  checkGiftEvent(order: Order, eventManager: EventManager) {
    const totalPrice: number = order.getTotalPrice();
    if (totalPrice < MIN_EVENT_JOIN_PRICE) {
      return;
    }

    this.eventService.checkGiftReward(totalPrice, eventManager);
  }

  checkDiscountEvent(order: Order, eventManager: EventManager) {
    const totalPrice: number = order.getTotalPrice();
    if (totalPrice < MIN_EVENT_JOIN_PRICE) {
      return;
    }

    const date: number = order.getDate();
    this.eventService.checkChristmasEvent(date, eventManager);
    this.eventService.checkSpecialEvent(date, eventManager);
    this.eventService.checkWeekdayEvent(order, eventManager);
    this.eventService.checkWeekendEvent(order, eventManager);
  }

  showEventList(order: Order, eventManager: EventManager) {
    const giftReward: Reward = eventManager.getGift();
    OutputView.printGift(giftReward);

    const eventRewards: Reward[] = eventManager.getAllEvent();
    OutputView.printEventRewards(eventRewards);

    const rewardAmount: number = eventManager.getTotalDiscountAmount();
    const totalRewardAmount: number = rewardAmount + giftReward.reward;
    OutputView.printTotalRewardAmount(totalRewardAmount);

    const totalPrice: number = order.getTotalPrice();
    const finalPaymentAmount = totalPrice - rewardAmount;
    OutputView.printFinalPaymentAmount(finalPaymentAmount);
  }

  checkBadgeEvent(eventManager: EventManager) {
    const totalReward = eventManager.getTotalRewardAmount();
    const badge: string = this.eventService.checkBadgeEvent(totalReward);

    OutputView.printBadge(badge);
  }
}

export default EventController;
