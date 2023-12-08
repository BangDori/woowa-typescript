import EventController from "./controller/EventController.js";
import OrderController from "./controller/OrderController.js";
import Order from "./domain/Order.js";
import { rl } from "./view/InputView.js";

class App {
  private readonly orderController: OrderController;
  private readonly eventController: EventController;

  constructor() {
    this.orderController = new OrderController();
    this.eventController = new EventController();
  }

  async run() {
    const order: Order = await this.orderController.orderMenu();
    this.eventController.play(order);

    rl.close();
  }
}

export default App;
