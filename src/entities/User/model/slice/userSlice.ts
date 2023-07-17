import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { User, UserSchema } from '../types/user';

const initialState:UserSchema = {};

export const useSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setAuthData: (state, action:PayloadAction<User>) => {
            state.authData = action.payload;
        },
    },
});

export const { actions: userActions } = useSlice;
export const { reducer: userReducer } = useSlice;
