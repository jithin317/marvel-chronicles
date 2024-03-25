import { configureStore } from "@reduxjs/toolkit";
import charactersReducer from "../features/characterSlice";

const store = configureStore({
  reducer: { characters: charactersReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
