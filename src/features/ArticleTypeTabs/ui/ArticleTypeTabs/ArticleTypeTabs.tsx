import React, { memo, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { TabItem, Tabs as TabsDeprecated } from '@/shared/ui/deprecated/Tabs';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ArticleType } from '@/entities/Article';
import { ToggleFeatures } from '@/shared/lib/features/ToggleFeatures/ToggleFeatures';
import { Tabs } from '@/shared/ui/redesigned/Tabs';

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
            <ToggleFeatures
                feature="isAppRedesigned"
                on={
                    <Tabs
                        direction="column"
                        className={classNames('', {}, [className])}
                        tabs={typeTabs}
                        value={value}
                        onTabClick={onTabClick}
                    />
                }
                off={
                    <TabsDeprecated
                        className={classNames('', {}, [className])}
                        tabs={typeTabs}
                        value={value}
                        onTabClick={onTabClick}
                    />
                }
            />
        );
    },
);
