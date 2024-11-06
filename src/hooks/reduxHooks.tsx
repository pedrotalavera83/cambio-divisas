import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";


export const useReduxDispach = () => useDispatch<AppDispatch>();
export const useReduxSelector: TypedUseSelectorHook<RootState> = useSelector;