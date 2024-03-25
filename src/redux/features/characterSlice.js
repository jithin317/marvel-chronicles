import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isLoading: false,
  characters: [],
  error: null,
};

export const characterSlice = createSlice({
  name: "characters",
  initialState,
  reducers: {
    fetchCharactersStart: (state) => {
      state.isLoading = true;
    },
    fetchCharactersSuccess: (state, action) => {
      state.characters = action.payload;
      state.isLoading = false;
    },
    fetchCharacterError: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
  //   extraReducers: (builder) => {
  //     builder
  //       .addCase(fetchCharacters.pending, (state) => {
  //         state.isLoading = true;
  //       })
  //       .addCase(fetchCharacters.fulfilled, (state, action) => {
  //         state.characters = action.payload;
  //         state.isLoading = false;
  //       })
  //       .addCase(fetchCharacters.rejected, (state, action) => {
  //         state.error = action.payload;
  //         state.isLoading = false;
  //       });
  //   },
});

export const {
  fetchCharactersStart,
  fetchCharactersSuccess,
  fetchCharacterError,
} = characterSlice.actions;

export const fetchCharacters = (offset) => async (dispatch) => {
  dispatch(fetchCharactersStart());
  try {
    const response = await axios.get(
      "https://gateway.marvel.com/v1/public/characters",
      {
        params: {
          ts: "1",
          apikey: "11be3e2798b8dfba5fd1a35b06c1ff12",
          hash: "ef20bca74f72a08ebddd9b13818ceffb",
          limit: 10,
          offset: 50,
        },
      }
    );
    dispatch(fetchCharactersSuccess(response.data.data.results));
  } catch (error) {
    dispatch(fetchCharacterError(error.message));
  }
};

export default characterSlice.reducer;
