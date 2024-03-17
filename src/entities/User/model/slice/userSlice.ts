import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import {
    LOCAL_STORAGE_LAST_DESIGN_KEY,
    USER_LOCAL_STORAGE_KEY,
} from '@/shared/const/localStorage';
import { User, UserSchema } from '../types/user';
import { setFeatureFlags } from '@/shared/lib/features';
import { saveJsonSettings } from '../services/saveJsonSettings';
import { JsonSettings } from '../types/jsonSettings';
import { initAuthData } from '../services/initAuthData';

const initialState: UserSchema = {
    _inited: false,
};

export const useSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setAuthData: (state, action: PayloadAction<User>) => {
            const { id, features } = action.payload;
            state.authData = action.payload;
            setFeatureFlags(features);
            localStorage.setItem(USER_LOCAL_STORAGE_KEY, id);
            localStorage.setItem(
                LOCAL_STORAGE_LAST_DESIGN_KEY,
                features?.isAppRedesigned ? 'new' : 'old',
            );
        },
        logout: (state) => {
            state.authData = undefined;
            localStorage.removeItem(USER_LOCAL_STORAGE_KEY);
        },
    },
    extraReducers: (builder) => {
        builder.addCase(
            saveJsonSettings.fulfilled,
            (state, { payload }: PayloadAction<JsonSettings>) => {
                if (state.authData) {
                    state.authData.jsonSettings = payload;
                }
            },
        );
        builder.addCase(
            initAuthData.fulfilled,
            (state, { payload }: PayloadAction<User>) => {
                state.authData = payload;
                setFeatureFlags(payload.features);
                state._inited = true;
            },
        );
        builder.addCase(initAuthData.rejected, (state) => {
            state._inited = true;
        });
    },
});

export const { actions: userActions } = useSlice;
export const { reducer: userReducer } = useSlice;
