import { CartActions } from "../constants/actionTypes";

const initialState = {
  products: [
    {
      id: 1,
      imageurl: "/images/boneless.jpg",
      title: "Fish",
      price: 1000,
      isdiscount: true,
      discountpercentage: 10,
      quantity: 1,
      totalamount: 1000,
    },
    {
      id: 2,
      imageurl:
        "https://assets.licious.in/catalog-category/c2b3abcf-dbc0-4cc2-a5c9-99620a219b8a/original/1740573133192.jpg",
      title: "Sardine",
      price: 350,
      isdiscount: false,
      discountpercentage: 0,
      quantity: 1,
      totalamount: 350,
    },
    {
      id: 3,
      imageurl:
        "https://assets.licious.in/catalog-category/c2b3abcf-dbc0-4cc2-a5c9-99620a219b8a/original/1740573133192.jpg",
      title: "Katla",
      price: 500,
      isdiscount: false,
      discountpercentage: 0,
      quantity: 1,
      totalamount: 500,
    },
    {
      id: 4,
      imageurl:
        "https://assets.licious.in/catalog-category/c2b3abcf-dbc0-4cc2-a5c9-99620a219b8a/original/1740573133192.jpg",
      title: "Sardine",
      price: 350,
      isdiscount: false,
      discountpercentage: 0,
      quantity: 1,
      totalamount: 350,
    },
    {
      id: 5,
      imageurl:
        "https://assets.licious.in/catalog-category/c2b3abcf-dbc0-4cc2-a5c9-99620a219b8a/original/1740573133192.jpg",
      title: "Katla",
      price: 500,
      isdiscount: false,
      discountpercentage: 0,
      quantity: 1,
      totalamount: 500,
    },
  ],
};

const InitCartItems = {
  myCarts: [],
};

export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case CartActions.SET_PRODUCTS:
      return { ...state, products: payload };
    default:
      return state;
  }
};

export const cartItemsReducer = (state = InitCartItems, { type, payload }) => {
  switch (type) {
    case CartActions.SELECTED_PRODUCT:
      if ([...state.myCarts].findIndex((c) => c.id === payload.id) < 0)
        return { ...state, myCarts: [...state.myCarts, payload] };
      else {
        let updated = [...state.myCarts].map((cart) => {
          return cart.id === payload.id
            ? {
                ...cart,
                quantity: payload.quantity,
                totalamount: payload.quantity * payload.price,
              }
            : cart;
        });
        return { ...state, myCarts: updated };
      }
    case CartActions.REMOVE_SELECTED_PRODUCT:
      const newCart = [...state.myCarts].filter((c) => {
        return c.id != payload.id;
      });
      return { ...state, myCarts: newCart };
    default:
      return state;
  }
};

const maxKG = {
  maxOrderKG: 10,
};

export const limitMaxOrderReducer = (state = maxKG, { type, payload }) => {
  switch (type) {
    case CartActions.SET_KG_LIMIT:
      return { ...state, maxOrderKG: payload };
    default:
      return state;
  }
};
