import { Badge } from "../../types/Event.js";

class BadgeEvent {
  private readonly badge: Badge;

  constructor() {
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

  getBadge(totalReward: number): string {
    for (const rank in this.badge) {
      if (totalReward >= this.badge[rank].required) {
        return this.badge[rank].name;
      }
    }

    return this.badge.no.name;
  }
}

export default BadgeEvent;
