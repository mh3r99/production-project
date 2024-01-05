import { LoginSchema } from '../types/loginSchema';
import { loginActions, loginReducer } from './loginSlice';
import { loginByUsername } from '../services/loginByUsername/loginByUsername';

describe('loginSlice.test', () => {
    test('test set username', () => {
        const state: DeepPartial<LoginSchema> = {
            username: 'admin',
        };

        expect(
            loginReducer(
                state as LoginSchema,
                loginActions.setUsername('admin'),
            ),
        ).toEqual({ username: 'admin' });
    });

    test('test set isLoading', () => {
        const state: DeepPartial<LoginSchema> = {
            isLoading: false,
        };
        expect(
            loginReducer(state as LoginSchema, loginByUsername.pending),
        ).toEqual({
            error: undefined,
            isLoading: true,
        });
    });
});
