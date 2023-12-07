const APPETIZER_MENU = "appetizer";

const 양송이수프 = Object.freeze({
  name: "양송이수프",
  type: APPETIZER_MENU,
  price: 6_000,
});
const 타파스 = Object.freeze({
  name: "타파스",
  type: APPETIZER_MENU,
  price: 5_500,
});
const 시저샐러드 = Object.freeze({
  name: "시저샐러드",
  type: APPETIZER_MENU,
  price: 8_000,
});

const APPETIZER = Object.freeze({
  시저샐러드,
  타파스,
  양송이수프,
});

export default APPETIZER;
