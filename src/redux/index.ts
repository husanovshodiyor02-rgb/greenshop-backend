// import {configureStore} from "@reduxjs/toolkit";
// import  modalSlice from "./modal-store";

// export const store = configureStore({
//     reducer: {
//         modalSlice,
//     },
// })


// export type RootStore = ReturnType< typeof store.getState>;
// export type DispatchType = typeof store.dispatch;

import { configureStore } from "@reduxjs/toolkit";
import modalSlice from "./modal-store";

export const store = configureStore({
  reducer: {
    modalSlice,
  },
});

// O'zgartirish shu yerda: RootStore -> RootState
export type RootState = ReturnType<typeof store.getState>;
export type DispatchType = typeof store.dispatch;