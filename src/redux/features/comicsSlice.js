import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isLoading: false,
  comics: [],
  error: null,
};

export const comicsSlice = createSlice({
  name: "comics",
  initialState,
  reducers: {
    fetchcomicsStart: (state) => {
      state.isLoading = true;
    },
    fetchcomicsSuccess: (state, action) => {
      state.comics = action.payload;
      state.isLoading = false;
    },
    fetchcomicsError: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchcomicsStart, fetchcomicsSuccess, fetchcomicsError } =
  comicsSlice.actions;

export const fetchComics = (limit, offset) => async (dispatch) => {
  dispatch(fetchcomicsStart());
  try {
    const response = await axios.get(
      "https://gateway.marvel.com/v1/public/comics",
      {
        params: {
          ts: "1",
          apikey: process.env.REACT_APP_PUBLIC_KEY,
          hash: process.env.REACT_APP_HASH_KEY,
          limit: limit,
          offset: offset,
        },
      }
    );
    dispatch(fetchcomicsSuccess(response.data.data.results));
  } catch (error) {
    dispatch(fetchcomicsError(error.message));
  }
};

export default comicsSlice.reducer;
