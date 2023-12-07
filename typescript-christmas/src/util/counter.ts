import MENU_BOARD from "../constant/menu.js";

export function getCountByType(names: string[], type: string) {
  return names.reduce((count, name) => {
    if (MENU_BOARD[name].type === type) {
      return count + 1;
    }

    return count;
  }, 0);
}
