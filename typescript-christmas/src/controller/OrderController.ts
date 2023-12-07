import { Menu } from "../types/Menu.js";
import InputView from "../view/InputView.js";
import Order from "../domain/Order.js";
import OutputView from "../view/OutputView.js";

class OrderController {
  async orderMenu(): Promise<Order> {
    this.showWelcome();

    const date: number = await InputView.readDate();
    const menuList: Menu[] = await InputView.readMenuList();

    const order: Order = new Order(menuList, date);
    this.showEventPreview(date);
    this.showOrderInfo(order);

    return order;
  }

  showWelcome() {
    OutputView.printWelcome();
  }

  showEventPreview(date: number) {
    OutputView.printPreview(date);
  }

  showOrderInfo(order: Order) {
    const menuList: Menu[] = order.getMenus();
    OutputView.printMenuList(menuList);

    const totalPrice: number = order.getTotalPrice();
    OutputView.printTotalPrice(totalPrice);
  }
}

export default OrderController;
