import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import SuggestionSelectionSlice from "./slices/SuggestionSelectionSlice";

const store = configureStore({
  reducer: { SuggestionSelectionSlice },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export default store;
