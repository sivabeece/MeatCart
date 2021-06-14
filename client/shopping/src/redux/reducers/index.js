import { combineReducers } from "redux";
import {
  productReducer,
  limitMaxOrderReducer,
  cartItemsReducer,
} from "./productReducers";

const reducers = combineReducers({
  allProducts: productReducer,
  orderLimit: limitMaxOrderReducer,
  mycartItems: cartItemsReducer,
});

export default reducers;
