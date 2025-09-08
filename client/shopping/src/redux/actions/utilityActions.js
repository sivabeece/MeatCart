import { CartActions } from "../constants/actionTypes";

export const setBackGrounColor = (backgroundColor) => {
    return {
      type: CartActions.SET_BACKGROUND_COLOR,
      payload: backgroundColor,
    };
  };