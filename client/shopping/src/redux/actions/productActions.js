import { CartActions } from "../constants/actionTypes";

export const setProducts = (products) => {
  return {
    type: CartActions.SET_PRODUCTS,
    payload: products,
  };
};

export const selectedProduct = (product) => {
  return {
    type: CartActions.SELECTED_PRODUCT,
    payload: product,
  };
};

export const removeSelectedProduct = (product) => {
  return {
    type: CartActions.REMOVE_SELECTED_PRODUCT,
    payload: product,
  };
};

export const setKGLimit = (limitKGOrder) => {
  return {
    type: CartActions.SET_KG_LIMIT,
    payload: limitKGOrder,
  };
};

export const setUserDetails = (user) => {
  return {
    type: CartActions.SET_USER_DATA,
    payload: user,
  };
};
