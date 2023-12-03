import RacingController from "./controller/RacingController.js";

class App {
  async play() {
    const racingController = new RacingController();
    await racingController.start();
  }
}

export default App;
