import { EVENT } from "../event.js";

export const INPUT_MESSAGE = Object.freeze({
  date: `${EVENT.month}월 중 식당 예상 방문 날짜는 언제인가요? (숫자만 입력해 주세요!)\n`,
  menu: "주문하실 메뉴를 메뉴와 개수를 알려 주세요. (e.g. 해산물파스타-2,레드와인-1,초코케이크-1)\n",
});

export const OUTPUT_MESSAGE = Object.freeze({
  welcome: `안녕하세요! 우테코 식당 ${EVENT.month}월 이벤트 플래너입니다.`,
  preview: (date: number) =>
    `${EVENT.month}월 ${date}일에 우테코 식당에서 받을 이벤트 혜택 미리 보기!\n`,
  orderMenuList: "<주문 메뉴>",
  orderTotalPrice: "\n<할인 전 총주문 금액>",
  giftMenu: "\n<증정 메뉴>",
  eventList: "혜택 내역",
  totalEventAmount: "총혜택 금액",
  finalPaymentAmount: "할인 후 예상 결제 금액",
  eventBadge: `${EVENT.month}월 이벤트 배지`,
});
