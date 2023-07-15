import { createSlice } from '@reduxjs/toolkit';
import { UserSchema } from '../types/user';

const initialState:UserSchema = {};

export const useSlice = createSlice({
    name: 'user',
    initialState,
    reducers: { },
});

export const { actions: userActions } = useSlice;
export const { reducer: userReducer } = useSlice;
