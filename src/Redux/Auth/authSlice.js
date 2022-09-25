import { createSlice } from "@reduxjs/toolkit";

import { signUp, login } from "./authOperation";

const initialState = {
    user: {},
    token: '',
    isLogin: false,
    loading: false,
    error: null,

};

const authSlise = createSlice({
    name: "auth",
    initialState,
    extraReducers: {
        [signUp.pending]: (store) => {
            store.loading = true;
            store.error = null;
},
        [signUp.fulfilled]: (store, {payload}) => {
            store.loading = false;
            store.user = payload.user;
            store.token = payload.token;
            store.isLogin = true;
        },
        [signUp.rejected]: (store, {payload}) => {
            store.loading = false;
            store.error = payload;
        },
        [login.pending]: (store) => {
            store.loading = true;
            store.error = null;
},
        [login.fulfilled]: (store, {payload}) => {
            store.loading = false;
            store.user = payload.user;
            store.token = payload.token;
            store.isLogin = true;
        },
        [login.rejected]: (store, {payload}) => {
            store.loading = false;
            store.error = payload;
        },
    }
});

export default authSlise.reducer;