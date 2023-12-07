export const DRINK_MENU = "drink";

const 제로콜라 = Object.freeze({
  name: "제로콜라",
  type: DRINK_MENU,
  price: 3_000,
});
const 레드와인 = Object.freeze({
  name: "레드와인",
  type: DRINK_MENU,
  price: 60_000,
});
const 샴페인 = Object.freeze({
  name: "샴페인",
  type: DRINK_MENU,
  price: 25_000,
});

const DRINK = Object.freeze({
  제로콜라,
  레드와인,
  샴페인,
});

export default DRINK;
