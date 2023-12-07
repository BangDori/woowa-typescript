import EventManager from "../EventManager.js";
import { Badge } from "../../types/Event.js";

class BadgeEvent extends EventManager {
  private readonly badge: Badge;

  constructor() {
    super();

    this.badge = this.initBadge();
  }

  initBadge(): Badge {
    return {
      santa: { name: "산타", required: 20_000 },
      tree: { name: "트리", required: 10_000 },
      star: { name: "별", required: 5_000 },
      no: { name: "없음", required: 0 },
    };
  }

  getBadge() {
    const totalEventDiscount = this.getTotalEventDiscount();

    for (const name in this.badge) {
      if (totalEventDiscount >= this.badge[name].required) {
        return name;
      }
    }
  }
}

export default BadgeEvent;
