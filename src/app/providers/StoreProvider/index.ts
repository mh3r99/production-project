import {
    StateSchema, ReduxStoreWithManager, ThunkConfig,
} from 'app/providers/StoreProvider/config/StateSchema';
import { StoreProvider } from './ui/StoreProvider';
import { createReduxStore, AppDispatch } from './config/store';

export {
    StoreProvider, createReduxStore, StateSchema, ReduxStoreWithManager, AppDispatch,
    ThunkConfig,
};
