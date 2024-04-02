import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isLoading: false,
  series: [],
  error: null,
};

export const seriesSlice = createSlice({
  name: "series",
  initialState,
  reducers: {
    fetchSeriesStart: (state) => {
      state.isLoading = true;
    },
    fetchSeriesSuccess: (state, action) => {
      state.series = action.payload;
      state.isLoading = false;
    },
    fetchSeriesError: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchSeriesStart, fetchSeriesSuccess, fetchSeriesError } =
  seriesSlice.actions;

export const fetchSeries = (limit, offset) => async (dispatch) => {
  dispatch(fetchSeriesStart());
  try {
    const response = await axios.get(
      "https://gateway.marvel.com:443/v1/public/series",
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
    dispatch(fetchSeriesSuccess(response.data.data.results));
  } catch (error) {
    dispatch(fetchSeriesError(error.message));
  }
};

export default seriesSlice.reducer;
