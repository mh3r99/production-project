import React from 'react';
import { useTranslation } from 'react-i18next';
import { Card } from '@/shared/ui/deprecated/Card';
import { Input } from '@/shared/ui/deprecated/Input';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticlesPageFilters.module.scss';
import { ArticleSortSelector } from '@/features/ArticleSortSelector';
import { ArticleViewSelector } from '@/features/ArticleViewSelector';
import { ArticleTypeTabs } from '@/features/ArticleTypeTabs';
import { useArticleFilters } from '../../lib/hooks/useArticleFilters';

interface ArticlesPageFiltersProps {
    className?: string;
}

export const ArticlesPageFilters = ({
    className,
}: ArticlesPageFiltersProps) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();

    const {
        view,
        sort,
        order,
        search,
        type,
        onChangeView,
        onChangeSearch,
        onChangeType,
        onChangeOrder,
        onChangeSort,
    } = useArticleFilters();

    return (
        <div className={classNames('', {}, [className])}>
            <div className={cls.sortWrapper}>
                <ArticleSortSelector
                    sort={sort}
                    order={order}
                    onChangeSort={onChangeSort}
                    onChangeOrder={onChangeOrder}
                />
                <ArticleViewSelector view={view} onViewClick={onChangeView} />
            </div>
            <Card className={cls.search}>
                <Input
                    value={search}
                    onChange={onChangeSearch}
                    placeholder={t('Поиск')}
                />
            </Card>
            <ArticleTypeTabs
                className={cls.tabs}
                value={type}
                onChangeType={onChangeType}
            />
        </div>
    );
};
