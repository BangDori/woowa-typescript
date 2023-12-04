import { ERROR_PREFIX } from "../constant/error.js";

class CustomError extends Error {
  constructor(errorMessage: string) {
    super(ERROR_PREFIX + errorMessage);
    this.name = this.constructor.name;
  }
}

export default CustomError;
