import React, { memo, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { TabItem, Tabs } from 'src/shared/ui/deprecated/Tabs';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ArticleType } from '@/entities/Article';

interface ArticleTypeTabsProps {
    className?: string;
    value: ArticleType;
    onChangeType: (type: ArticleType) => void;
}

export const ArticleTypeTabs = memo(
    ({ className, value, onChangeType }: ArticleTypeTabsProps) => {
        const { t } = useTranslation();

        const typeTabs = useMemo<TabItem[]>(
            () => [
                {
                    value: ArticleType.ALL,
                    content: t('Все статьи'),
                },
                {
                    value: ArticleType.IT,
                    content: t('Айти'),
                },
                {
                    value: ArticleType.ECONOMICS,
                    content: t('Экономика'),
                },
                {
                    value: ArticleType.SCIENCE,
                    content: t('Наука'),
                },
            ],
            [t],
        );

        const onTabClick = useCallback(
            (tab: TabItem) => {
                onChangeType(tab.value as ArticleType);
            },
            [onChangeType],
        );

        return (
            <Tabs
                className={classNames('', {}, [className])}
                tabs={typeTabs}
                value={value}
                onTabClick={onTabClick}
            />
        );
    },
);
