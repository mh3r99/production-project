import React, { HTMLAttributeAnchorTarget, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ArticleListItemSkeleton } from 'entities/Article/ui/ArticleListItem/ArticleListItemSkeleton';
import { Text, TextSize } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { Article, ArticleView } from '../../model/types/article';
import cls from './ArticleList.module.scss';

interface ArticleListProps {
    articles: Article[];
    className?: string;
    isLoading?: boolean;
    view?: ArticleView;
    target?: HTMLAttributeAnchorTarget;

}

const getSkeletons = (view: ArticleView) => new Array(view === ArticleView.SMALL ? 9 : 3)
    .fill(0)
    .map((item, index) => (
        <ArticleListItemSkeleton className={cls.card} key={index} view={view} />
    ));

export const ArticleList = memo(({
    className,
    articles,
    isLoading,
    view = ArticleView.SMALL,
    target,
}: ArticleListProps) => {
    const { t } = useTranslation();
    const renderArticles = (article: Article) => (
        <ArticleListItem
            key={article.id}
            article={article}
            view={view}
            className={cls.card}
            target={target}

        />
    );

    if (!isLoading && !articles.length) {
        return (
            <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
                <Text size={TextSize.L} title={t('Статьи не найдены')} />
            </div>
        );
    }

    return (
        <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
            {articles.length > 0 ? articles.map(renderArticles) : null}
            {isLoading && getSkeletons(view)}
        </div>
    );
});