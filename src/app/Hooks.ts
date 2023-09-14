import { TypedUseSelectorHook, useSelector, useDispatch } from "react-redux";
import type { AppDispatc, RootType } from "./store";

export const useAppSelector: TypedUseSelectorHook<RootType> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatc>();
