import { OUTPUT_MESSAGE } from "../constant/message/io.js";
import { Menu } from "../types/Menu.js";

const OutputView = {
  printErrorMessage(errorMessage: string) {
    console.log(errorMessage);
  },
  printWelcome() {
    console.log(OUTPUT_MESSAGE.welcome);
  },
  printPreview(date: number) {
    console.log(OUTPUT_MESSAGE.preview(date));
  },

  printMenuList(menuList: Menu[]) {
    console.log(OUTPUT_MESSAGE.orderMenuList);
    menuList.forEach(([name, count]) => console.log(`${name} ${count}개`));
  },
  printTotalPrice(totalPrice: number) {
    console.log(OUTPUT_MESSAGE.orderTotalPrice);
    console.log(`${totalPrice.toLocaleString()}원`);
  },
};

export default OutputView;
