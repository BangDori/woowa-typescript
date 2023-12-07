import EventController from "./controller/EventController.js";
import OrderController from "./controller/OrderController.js";
import Order from "./domain/Order.js";

class App {
  private readonly orderController: OrderController;
  private readonly eventController: EventController;

  constructor() {
    this.orderController = new OrderController();
    this.eventController = new EventController();
  }

  async run() {
    const order: Order = await this.orderController.orderMenu();
    this.eventController.init();

    console.log(order, this.eventController);
  }
}

export default App;
