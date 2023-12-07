export type Menu = [string, number];
export interface MenuBoard {
  [index: string]: {
    name: string;
    type: string;
    price: number;
  };
}
