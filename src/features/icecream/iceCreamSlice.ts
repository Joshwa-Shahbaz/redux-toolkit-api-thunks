import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialState = {
  numOfIceCream: number;
};

const initialState: InitialState = {
  numOfIceCream: 40,
};

export const iceCreamSlice = createSlice({
  name: "iceCream",
  initialState,
  reducers: {
    ordered: (state) => {
      state.numOfIceCream--;
    },
    restocked: (state, action: PayloadAction<number>) => {
      state.numOfIceCream += action.payload;
    },
  },
});

export default iceCreamSlice.reducer;
export const { ordered, restocked } = iceCreamSlice.actions;
