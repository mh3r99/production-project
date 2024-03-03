import React, { memo, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
    DynamicModuleLoader,
    ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Page } from '@/widgets/Page';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ArticleInfiniteList } from '../../ui/ArticleInfiniteList/ArticleInfiniteList';
import { fetchNextArticlesPage } from '../../model/services/fetchNextArticlesPage/fetchNextArticlesPage';
import { initArticlesPage } from '../../model/services/initArticlecPage/initArticlesPage';
import { ArticlesPageFilters } from '../../ui/ArticlesPageFilters/ArticlesPageFilters';
import { articlesPageReducer } from '../../model/slice/articlesPageSlice';
import cls from './ArticlesPage.module.scss';
import { ArticlePageGreeting } from '@/features/articlePageGreeting';
import { ToggleFeatures } from '@/shared/lib/features/ToggleFeatures/ToggleFeatures';
import { StickyContentLayout } from '@/shared/layouts/StickyContentLayout';
import { ViewSelectorContainer } from '../ViewSelectorContainer/ViewSelectorContainer';

const reducers: ReducersList = {
    articlesPage: articlesPageReducer,
};

interface ArticlesPageProps {
    className?: string;
}

const ArticlesPage = ({ className }: ArticlesPageProps) => {
    const dispatch = useAppDispatch();
    const [searchParams] = useSearchParams();

    useInitialEffect(() => {
        dispatch(initArticlesPage(searchParams));
    });

    const onLoadNextPart = useCallback(() => {
        dispatch(fetchNextArticlesPage());
    }, [dispatch]);

    const content = (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <StickyContentLayout
                    left={<ViewSelectorContainer />}
                    content={
                        <Page
                            data-testid="ArticlesPage"
                            className={classNames('', {}, [className])}
                            onScrollEnd={onLoadNextPart}
                        >
                            <ArticleInfiniteList className={cls.list} />
                            <ArticlePageGreeting />
                        </Page>
                    }
                />
            }
            off={
                <Page
                    data-testid="ArticlesPage"
                    className={classNames(cls.ArticlesPage, {}, [className])}
                    onScrollEnd={onLoadNextPart}
                >
                    <ArticlesPageFilters />
                    <ArticleInfiniteList className={cls.list} />
                    <ArticlePageGreeting />
                </Page>
            }
        />
    );

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
            {content}
        </DynamicModuleLoader>
    );
};

export default memo(ArticlesPage);
