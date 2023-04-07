import { C_TEMP } from "./enum";

export const TransferTempType = (temp, type) => {
  let result = Math.round(temp);
  if (type === C_TEMP) {
    result = (temp * 9) / 5 + 32;
  } else {
    result = ((temp - 32) * 5) / 9;
  }
  return result;
};
