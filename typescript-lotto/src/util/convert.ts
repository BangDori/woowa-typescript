export function convertStringToNumberArray(
  inputString: string,
  delimiter: string
): number[] {
  return inputString.split(delimiter).map((input) => Number(input));
}
