import { combineReducers } from "redux";
import {
  productReducer,
  limitMaxOrderReducer,
  cartItemsReducer,
} from "./productReducers";
import { userReducer } from "./userReducer";

const reducers = combineReducers({
  allProducts: productReducer,
  orderLimit: limitMaxOrderReducer,
  mycartItems: cartItemsReducer,
  userData: userReducer,
});

export default reducers;
