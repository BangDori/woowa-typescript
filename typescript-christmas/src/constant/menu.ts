import APPETIZER from "./menu/appetizer.js";
import MAIN from "./menu/MAIN.js";
import DESSERT from "./menu/dessert.js";
import DRINK from "./menu/drink.js";
import { MenuBoard } from "../types/Menu.js";

const MENU_BOARD: MenuBoard = Object.freeze({
  ...APPETIZER,
  ...MAIN,
  ...DESSERT,
  ...DRINK,
});

export default MENU_BOARD;
