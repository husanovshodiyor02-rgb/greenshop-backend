
import { createSlice } from "@reduxjs/toolkit";
import type { ShopCartType } from "../@types";

interface InitialStateType {
  data: ShopCartType[]; 
  coupon: number;
  wishlist: ShopCartType[]; 
}

const initialState: InitialStateType = {
  data: JSON.parse(localStorage.getItem("shop") as string) || [],
  coupon: 0,
  wishlist: JSON.parse(localStorage.getItem("wishlist") as string) || [],
};

const shopSlice = createSlice({
  name: "shop-slice",
  initialState,
  reducers: {
  
    getData(state, { payload }) {
      const exists = state.data.find((value) => value._id === payload._id);
      if (exists) {
        state.data = state.data.map((value) =>
          value._id === payload._id
            ? {
                ...value,
                counter: value.counter + 1,
                userPrice: value.price * (value.counter + 1),
              }
            : value
        );
      } else {
        state.data.push({ ...payload, counter: 1, userPrice: payload.price });
      }
      localStorage.setItem("shop", JSON.stringify(state.data));
    },

    deleteData(state, { payload }) {
      state.data = state.data.filter((value) => value._id !== payload);
      localStorage.setItem("shop", JSON.stringify(state.data));
    },

    increment(state, { payload }) {
      state.data = state.data.map((value) =>
        value._id === payload
          ? {
              ...value,
              counter: value.counter + 1,
              userPrice: value.price * (value.counter + 1),
            }
          : value
      );
      localStorage.setItem("shop", JSON.stringify(state.data));
    },

    decrement(state, { payload }) {
      state.data = state.data.map((value) =>
        value._id === payload
          ? {
              ...value,
              counter: value.counter === 1 ? 1 : value.counter - 1,
              userPrice:
                value.price * (value.counter === 1 ? 1 : value.counter - 1),
            }
          : value
      );
      localStorage.setItem("shop", JSON.stringify(state.data));
    },

    getCoupon(state, { payload }) {
      state.coupon = payload;
    },

    addToWishlist(state, { payload }) {
      const exists = state.wishlist.find((p) => p._id === payload._id);
      if (!exists) state.wishlist.push(payload);
      localStorage.setItem("wishlist", JSON.stringify(state.wishlist));
    },

    removeFromWishlist(state, { payload }) {
      state.wishlist = state.wishlist.filter((p) => p._id !== payload);
      localStorage.setItem("wishlist", JSON.stringify(state.wishlist));
    },
  },
});

export const {
  getData,
  deleteData,
  increment,
  decrement,
  getCoupon,
  addToWishlist,
  removeFromWishlist,
} = shopSlice.actions;
export default shopSlice.reducer;
