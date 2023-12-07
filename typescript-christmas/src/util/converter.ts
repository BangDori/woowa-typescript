import { Menu } from "../types/Menu.js";

export function convertStringToMenuList(
  inputString: string,
  inputDelimiter: string,
  menuDelimiter: string
): Menu[] {
  return inputString.split(inputDelimiter).map((menu) => {
    const [name, count] = menu.split(menuDelimiter);
    return [name, Number(count)];
  });
}
