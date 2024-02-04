import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Select, SelectOption } from 'src/shared/ui/deprecated/Select';
import { classNames } from '@/shared/lib/classNames/classNames';
import { SortOrder } from '@/shared/types/sort';
import cls from './ArticleSortSelector.module.scss';
import { ArticleSortField } from '@/entities/Article';

interface ArticleSortSelectorProps {
    className?: string;
    sort: ArticleSortField;
    order: SortOrder;
    onChangeOrder: (newOrder: SortOrder) => void;
    onChangeSort: (newOrder: ArticleSortField) => void;
}

export const ArticleSortSelector = ({
    className,
    sort,
    order,
    onChangeOrder,
    onChangeSort,
}: ArticleSortSelectorProps) => {
    const { t } = useTranslation();

    const sortFieldOptions = useMemo<SelectOption<ArticleSortField>[]>(
        () => [
            {
                value: ArticleSortField.CREATED,
                content: t('дата создания'),
            },
            {
                value: ArticleSortField.TITLE,
                content: t('названию'),
            },
            {
                value: ArticleSortField.VIEWS,
                content: t('просмотрам'),
            },
        ],
        [t],
    );

    const orderOptions = useMemo<SelectOption<SortOrder>[]>(
        () => [
            {
                value: 'asc',
                content: t('возрастанию'),
            },
            {
                value: 'desc',
                content: t('убыванию'),
            },
        ],
        [t],
    );

    return (
        <div className={classNames(cls.ArticleSortSelector, {}, [className])}>
            <Select
                label={t('Сортировать ПО')}
                options={sortFieldOptions}
                value={sort}
                onChange={onChangeSort}
            />
            <Select
                className={cls.order}
                label={t('по')}
                options={orderOptions}
                value={order}
                onChange={onChangeOrder}
            />
        </div>
    );
};
