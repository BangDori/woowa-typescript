export const DESSERT_MENU = "dessert";

const 초코케이크 = Object.freeze({
  name: "초코케이크",
  type: DESSERT_MENU,
  price: 15_000,
});
const 아이스크림 = Object.freeze({
  name: "아이스크림",
  type: DESSERT_MENU,
  price: 5_000,
});

const DESSERT = Object.freeze({
  초코케이크,
  아이스크림,
});

export default DESSERT;
