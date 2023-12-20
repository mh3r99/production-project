import { Story } from '@storybook/react';
import { StateSchema, StoreProvider } from '@/app/providers/StoreProvider';
import { profileReducer } from '@/entities/Profile';
//  TODO
// eslint-disable-next-line prod-project-plugin/public-api-imports
import { loginReducer } from '@/features/AuthByUsername/model/slice/loginSlice';
// eslint-disable-next-line prod-project-plugin/public-api-imports
import { articleDetailsReducer } from '@/entities/Article/model/slice/articleDetailsSlice';
import { ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
// eslint-disable-next-line prod-project-plugin/public-api-imports
import { addCommentFormReducer } from '@/features/addCommentForm/model/slice/addCommentFormSlice';
// eslint-disable-next-line prod-project-plugin/public-api-imports
import { articleDetailsPageReducer } from '@/pages/ArticleDetailsPage/model/slices';

const defaultAsyncReducers: ReducersList = {
    loginForm: loginReducer,
    profile: profileReducer,
    articleDetails: articleDetailsReducer,
    addCommentForm: addCommentFormReducer,
    articleDetailsPage: articleDetailsPageReducer,
};

export const StoreDecorator = (
    state: DeepPartial<StateSchema>,
    asyncReducers?: ReducersList,
) => (StoryComponent: Story) => (
    <StoreProvider initialState={state} asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}>
        <StoryComponent />
    </StoreProvider>
);
