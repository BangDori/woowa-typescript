export function convertStringToNumberList(inputString: string): number[] {
  return inputString.split("").map((character) => Number(character));
}
