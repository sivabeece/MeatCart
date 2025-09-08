import { CartActions } from "../constants/actionTypes";

const defalutBackGroundClass = {
  defaultBgClass: "app-content",
};

export const UtilityReducer = (state = defalutBackGroundClass, { type, payload }) => {
  switch (type) {
    case CartActions.SET_BACKGROUND_COLOR:
      return { ...state, defaultBgClass: payload };

    default:
      return state;
  }
};
