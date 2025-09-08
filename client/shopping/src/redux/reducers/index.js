import { combineReducers } from "redux";
import {
  productReducer,
  limitMaxOrderReducer,
  cartItemsReducer,
} from "./productReducers";
import { UtilityReducer } from "./utilityReducers";

const reducers = combineReducers({
  allProducts: productReducer,
  orderLimit: limitMaxOrderReducer,
  mycartItems: cartItemsReducer,
  utility: UtilityReducer,
});

export default reducers;
