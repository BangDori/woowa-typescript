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

  getCountByType(type: string): number {
    return this.menus.reduce((totalCount, [name, count]) => {
      if (MENU_BOARD[name].type === type) {
        return totalCount + count;
      }

      return totalCount;
    }, 0);
  }
}

export default Order;
