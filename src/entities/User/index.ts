export { userReducer, userActions } from './model/slice/userSlice';
export type { UserSchema, User } from './model/types/user';
export { getUserAuthData } from './model/selectors/getUserAuthData/getUserAuthData';
export { getUserInited } from './model/selectors/getUserInited/getUserInited';
export {
    getUserRoles,
    isUserAdmin,
    isUserManager,
} from '@/entities/User/model/selectors/roleSelector';
export { UserRole } from '@/entities/User/model/consts/consts';
export type { JsonSettings } from '@/entities/User/model/types/jsonSettings';
export { useJsonSettings } from '@/entities/User/model/selectors/jsonSettings';
export { saveJsonSettings } from '@/entities/User/model/services/saveJsonSettings';
export { initAuthData } from '@/entities/User/model/services/initAuthData';
