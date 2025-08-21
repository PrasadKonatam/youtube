import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    searchResults: {},
  },
  reducers: {
    searchResults: (state, action) => {
      state.searchResults = {
        ...state.searchResults,
        ...action.payload,
      };
    },
  },
});
export const { searchResults } = searchSlice.actions;
export default searchSlice.reducer;
