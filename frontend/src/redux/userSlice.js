import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "",
  firstName: "",
  img: "",
  lastName: "",
  _id: "",
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
      loginRedux: (state, action) => {
        state._id = action.payload.data._id;
        state.firstName = action.payload.data.firstName;
        state.lastName = action.payload.data.lastName;
        state.email = action.payload.data.email;
        state.img = action.payload.data.img;
      },
      logoutRedux: (state, action) => {
        state._id = "";
        state.firstName = "";
        state.lastName = "";
        state.email = "";
        state.img = "";
      },
    },
  });
  
  export const { loginRedux, logoutRedux } = userSlice.actions;
  
  export default userSlice.reducer;