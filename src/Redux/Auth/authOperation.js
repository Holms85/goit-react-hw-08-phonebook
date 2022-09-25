import { createAsyncThunk } from "@reduxjs/toolkit";

import * as api from "../../components/service/auth";

export const signUp = createAsyncThunk(
    'auth/sigUp',
    async (data, { rejectWithValue }) => {
        try {
            const result = await api.signUp(data);
            return result;
        } catch ({ response }) {
            const { status, data } = response;
            const error = {
                status,
                message: data.message,
            }
            return rejectWithValue(error);
        }
    }
);

export const login = createAsyncThunk(
    'auth/login',
    async (data, { rejectWithValue }) => {
        try {
            const result = await api.login(data);
            return result;
        } catch ({ response }) {
            const { status, data } = response;
            const error = {
                status,
                message: data.message,
            }
            return rejectWithValue(error);
        }
    }
)