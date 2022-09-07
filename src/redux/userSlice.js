import { createSlice } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";


const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['token'],
};


export const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: {
            name: null,
            email: null
        },
        token: null,
        isLoggIn: false,
    },
    reducers: {
        // addNewUser(state, action) {
        //     state.user.name = action.payload.name;
        //     state.user.email = action.payload.email;
        //     state.isLoggIn = true
        //     state.token = action.payload.token
        // },
        // logInUserSl(state, action) {
        //     state.user.name = action.payload.name;;
        //     state.user.email = action.payload.email;
        //     state.isLoggIn = true;
        //     state.token = action.payload.token;
        // },
        setAuthToken(state, action) {
      state.token = action.payload;
    },
    clearState(state) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggIn = false;
    },
    setUser(state, action) {
      state.user = action.payload;
      state.isLoggIn = true;
    },
        // logOutSl(state) {
        //     state.user.name = null;
        //     state.user.email = null;;
        //     state.isLoggIn = false;
        //     state.token = null;
        // },
        
    },
});
export const persistUserReducer = persistReducer(
  persistConfig,
  userSlice.reducer
);

export const { setAuthToken, clearState, setUser, } = userSlice.actions;