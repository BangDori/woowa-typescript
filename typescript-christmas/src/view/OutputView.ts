import { OUTPUT_MESSAGE } from "../constant/message/io.js";
import { Menu } from "../types/Menu.js";
import { Reward } from "../types/Event.js";
import { NO_REWARD } from "../constant/event.js";

const OutputView = {
  printErrorMessage(errorMessage: string) {
    console.log(errorMessage);
  },
  printWelcome() {
    console.log(OUTPUT_MESSAGE.welcome);
  },
  printPreview(date: number) {
    console.log(OUTPUT_MESSAGE.preview(date));
  },

  printMenuList(menuList: Menu[]) {
    console.log(OUTPUT_MESSAGE.orderMenuList);
    menuList.forEach(([name, count]) => console.log(`${name} ${count}개`));
  },
  printTotalPrice(totalPrice: number) {
    console.log(OUTPUT_MESSAGE.orderTotalPrice);
    console.log(`${totalPrice.toLocaleString()}원`);
  },

  printGift(reward: Reward) {
    console.log(OUTPUT_MESSAGE.giftMenu);
    if (reward.name === NO_REWARD.name) console.log(NO_REWARD.name);
    else console.log(`${reward.item} 1개`);
  },

  printEventRewards(eventList: Reward[]) {
    console.log(OUTPUT_MESSAGE.eventList);

    if (eventList[0] == NO_REWARD) {
      console.log(eventList[0].name);
    }

    eventList.forEach((event) => {
      if (event.reward === 0) return;
      console.log(`${event.name} : -${event.reward.toLocaleString()}원`);
    });
  },

  printTotalRewardAmount(totalRewardAmount: number) {
    console.log(OUTPUT_MESSAGE.totalRewardAmount);
    if (totalRewardAmount === 0) console.log("0원");
    else console.log(`-${totalRewardAmount.toLocaleString()}원`);
  },

  printFinalPaymentAmount(finalPaymentAmount: number) {
    console.log(OUTPUT_MESSAGE.finalPaymentAmount);
    console.log(`${finalPaymentAmount.toLocaleString()}원`);
  },

  printBadge(badge: string) {
    console.log(OUTPUT_MESSAGE.eventBadge);
    console.log(badge);
  },
};

export default OutputView;
