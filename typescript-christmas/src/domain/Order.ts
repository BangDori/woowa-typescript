import MENU_BOARD from "../constant/menu.js";
import { Menu } from "../types/Menu.js";

class Order {
  private readonly menus: Menu[];
  private readonly date: number;

  constructor(menus: Menu[], date: number) {
    this.menus = menus;
    this.date = date;
  }

  getTotalPrice(): number {
    return this.menus.reduce((totalPrice, [name, count]) => {
      return totalPrice + MENU_BOARD[name].price * count;
    }, 0);
  }

  getMenus(): Menu[] {
    return this.menus;
  }

  getDate(): number {
    return this.date;
  }
}

export default Order;
