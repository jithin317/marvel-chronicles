import { configureStore } from "@reduxjs/toolkit";
import charactersReducer from "../features/characterSlice";
import comicsReducer from "../features/comicsSlice";
import seriesReducer from "../features/seriesSlice";

const store = configureStore({
  reducer: {
    characters: charactersReducer,
    comics: comicsReducer,
    series: seriesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
