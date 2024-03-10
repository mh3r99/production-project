import React, { HTMLAttributeAnchorTarget, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Text, TextSize } from '@/shared/ui/deprecated/Text';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ArticleView } from '../../model/consts/consts';
import { ArticleListItemSkeleton } from '../../ui/ArticleListItem/ArticleListItemSkeleton';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { Article } from '../../model/types/article';
import cls from './ArticleList.module.scss';
import { ToggleFeatures } from '@/shared/lib/features/components/ToggleFeatures/ToggleFeatures';
import { HStack } from '@/shared/ui/redesigned/Stack';

interface ArticleListProps {
    articles: Article[];
    className?: string;
    isLoading?: boolean;
    view?: ArticleView;
    target?: HTMLAttributeAnchorTarget;
}

const getSkeletons = (view: ArticleView) =>
    new Array(view === ArticleView.SMALL ? 9 : 3)
        .fill(0)
        .map((item, index) => (
            <ArticleListItemSkeleton
                className={cls.card}
                key={index}
                view={view}
            />
        ));

export const ArticleList = memo(
    ({
        className,
        articles,
        isLoading,
        view = ArticleView.SMALL,
        target,
    }: ArticleListProps) => {
        const { t } = useTranslation();

        const content = (
            <>
                {articles.map((item) => (
                    <ArticleListItem
                        article={item}
                        view={view}
                        target={target}
                        key={item.id}
                        className={cls.card}
                    />
                ))}

                {isLoading && getSkeletons(view)}
            </>
        );

        if (!isLoading && !articles.length) {
            return (
                <div
                    className={classNames(cls.ArticleList, {}, [
                        className,
                        cls[view],
                    ])}
                >
                    <Text size={TextSize.L} title={t('Статьи не найдены')} />
                </div>
            );
        }

        return (
            <ToggleFeatures
                feature="isAppRedesigned"
                on={
                    <HStack
                        gap="16"
                        wrap="wrap"
                        data-testid="ArticleList"
                        className={classNames(
                            cls.ArticleListRedesigned,
                            {},
                            [],
                        )}
                    >
                        {content}
                    </HStack>
                }
                off={
                    <div
                        data-testid="ArticleList"
                        className={classNames(cls.ArticleList, {}, [
                            className,
                            cls[view],
                        ])}
                    >
                        {content}
                    </div>
                }
            />
        );
    },
);
