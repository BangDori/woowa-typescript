export const MAIN_MENU = "main";

const 티본스테이크 = Object.freeze({
  name: "티본스테이크",
  type: MAIN_MENU,
  price: 55_000,
});
const 바비큐립 = Object.freeze({
  name: "바비큐립",
  type: MAIN_MENU,
  price: 54_000,
});
const 해산물파스타 = Object.freeze({
  name: "해산물파스타",
  type: MAIN_MENU,
  price: 35_000,
});
const 크리스마스파스타 = Object.freeze({
  name: "크리스마스파스타",
  type: MAIN_MENU,
  price: 25_000,
});

const MAIN = Object.freeze({
  티본스테이크,
  바비큐립,
  해산물파스타,
  크리스마스파스타,
});

export default MAIN;
