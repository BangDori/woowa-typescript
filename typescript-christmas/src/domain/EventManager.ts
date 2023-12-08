import { NO_REWARD } from "../constant/event.js";
import { Reward } from "../types/Event.js";

class EventManager {
  private gift: Reward;
  private event: Reward[];

  constructor() {
    this.gift = NO_REWARD;
    this.event = [];
  }

  applyGiftEvent(reward: Reward) {
    this.gift = reward;
  }

  applyDiscountEvent(reward: Reward) {
    this.event = this.event.concat(reward);
  }

  getGift(): Reward {
    return this.gift;
  }

  getAllEvent(): Reward[] {
    return [...this.event, this.gift];
  }

  getTotalRewardAmount(): number {
    return (
      this.gift.reward +
      this.event.reduce((totalDiscount, { reward }) => {
        return totalDiscount + reward;
      }, 0)
    );
  }

  getTotalDiscountAmount(): number {
    const totalRewardAmount = this.getTotalRewardAmount();
    return totalRewardAmount - this.gift.reward;
  }
}

export default EventManager;
