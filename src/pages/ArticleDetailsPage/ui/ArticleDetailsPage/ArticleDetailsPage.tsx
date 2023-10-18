import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { ArticleDetails } from 'entities/Article';
import { useParams } from 'react-router-dom';
import { Text, TextSize } from 'shared/ui/Text/Text';
import { CommentList } from 'entities/Comment';
import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useSelector } from 'react-redux';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { AddCommentForm } from 'features/addCommentForm';
import {
    addCommentForArticle,
} from 'pages/ArticleDetailsPage/model/services/addCommentForArticle/addCommentForArticle';
import { Page } from 'widgets/Page/Page';
import { getArticleComments } from 'pages/ArticleDetailsPage/model/slices/articleDetailsCommentsSlice';
import {
    getArticleRecommendations,
} from 'pages/ArticleDetailsPage/model/slices/articleDetailsPageRecommendationsSlice';
import { getArticleRecommendationsIsLoading } from 'pages/ArticleDetailsPage/model/selectors/recommendations';
import { ArticleList } from 'entities/Article/ui/ArticleList/ArticleList';
import {
    fetchArticleRecommendations,
} from 'pages/ArticleDetailsPage/model/services/fetchArticleRecommendations/fetchArticleRecommendations';
import { articleDetailsPageReducer } from 'pages/ArticleDetailsPage/model/slices';
import {
    ArticleDetailsPageHeader,
} from 'pages/ArticleDetailsPage/ui/ArticleDetailsPageHeader/ArticleDetailsPageHeader';
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { getArticleCommentsIsLoading } from '../../model/selectors/comments';
import cls from './ArticleDetailsPage.module.scss';

const reducers: ReducersList = {
    articleDetailsPage: articleDetailsPageReducer,
};

const ArticleDetailsPage = () => {
    const dispatch = useAppDispatch();
    const { t } = useTranslation('article-details');
    const { id } = useParams<{ id: string }>();
    const comments = useSelector(getArticleComments.selectAll);
    const recommendations = useSelector(getArticleRecommendations.selectAll);
    const commentsIsLoading = useSelector(getArticleCommentsIsLoading);
    const recommendationsIsLoading = useSelector(getArticleRecommendationsIsLoading);

    useInitialEffect(() => {
        dispatch(fetchCommentsByArticleId(id));
        dispatch(fetchArticleRecommendations());
    });

    if (!id) {
        return <Page className={classNames(cls.ArticleDetailsPage, {}, [])}>{t('Статья не найдена')}</Page>;
    }

    const onSendComment = (text: string) => {
        dispatch(addCommentForArticle(text));
    };

    return (
        <DynamicModuleLoader reducers={reducers}>
            <Page className={classNames(cls.ArticleDetailsPage, {}, [])}>
                <ArticleDetailsPageHeader />
                <ArticleDetails id={id} />
                <Text size={TextSize.L} className={cls.commentTitle} title={t('Рекомендуем')} />
                <ArticleList
                    articles={recommendations}
                    isLoading={recommendationsIsLoading}
                    className={cls.recommendations}
                    target="_blank"
                />
                <Text size={TextSize.L} className={cls.commentTitle} title={t('Комментарии')} />
                <AddCommentForm onSendComment={onSendComment} />
                <CommentList
                    isLoading={commentsIsLoading}
                    comments={comments}
                />
            </Page>
        </DynamicModuleLoader>
    );
};
export default memo(ArticleDetailsPage);
