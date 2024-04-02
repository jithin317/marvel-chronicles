import { configureStore } from "@reduxjs/toolkit";
import charactersReducer from "../features/characterSlice";
import comicsReducer from "../features/comicsSlice";

const store = configureStore({
  reducer: { characters: charactersReducer, comics: comicsReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
