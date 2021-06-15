import { CartActions } from "../constants/actionTypes";

const defalutUser = {
  userInfo: {},
};

export const userReducer = (state = defalutUser, { type, payload }) => {
  switch (type) {
    case CartActions.SET_USER_DATA:
      return { ...state, userInfo: payload };

    default:
      return state;
  }
};
