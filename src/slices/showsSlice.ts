import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ShowInfoModel } from "../types/show.model";

interface ShowsState {
  data: ShowInfoModel[];
}

const initialState = { data: [] } as ShowsState;

const showsSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    getShows() {},
    putShows(state, action: PayloadAction<any[]>) {
      state.data = [...action.payload];
    },
  },
});

export const { getShows, putShows } = showsSlice.actions;
export default showsSlice.reducer;
