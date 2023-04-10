import { notification } from "antd";
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

export const convertTempKToF = (temp) => {
  let result = Math.round(temp)
  return result = Math.round(result * (9/5) - 459,67) 
}

export const convertTempKToC = (temp) => {
  let result = Math.round(temp)
  return result = Math.round(result - 273,15) 
}

export const showMessage = (isSuccess, content) => {
  if (isSuccess) {
    notification.success({
      message: `Success`,
      description: `${content}`,
      placement: "topRight",
      duration: "3",
      className: "custom-class-show-message",
    });
  } else {
    notification.error({
      message: `Failed`,
      description: `${content}`,
      placement: "topRight",
      duration: "3",
      className: "custom-class-show-message",
    });
  }
};
