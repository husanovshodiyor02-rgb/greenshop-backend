// import { useDispatch, useSelector } from "react-redux";
// import type { TypedUseSelectorHook } from "react-redux";
// import type { RootState, DispatchType } from "../../redux";

// export const useReduxSelector: TypedUseSelectorHook<RootState> = useSelector;
// export const useReduxDispatch = () => useDispatch<DispatchType>();


import { useDispatch, useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";
import type { RootState, DispatchType } from "../../redux";

export const useReduxSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useReduxDispatch = () => useDispatch<DispatchType>();
