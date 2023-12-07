const 초코케이크 = Object.freeze({
  name: "초코케이크",
  type: "dessert",
  price: 15_000,
});
const 아이스크림 = Object.freeze({
  name: "아이스크림",
  type: "dessert",
  price: 5_000,
});

const DESSERT = Object.freeze({
  초코케이크,
  아이스크림,
});

export default DESSERT;
