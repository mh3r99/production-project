import React, { memo, useCallback, useMemo } from 'react';
import { TabItem, Tabs } from 'shared/ui/Tabs/Tabs';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { ArticleType } from '../../model/consts/consts';

interface ArticleTypeTabsProps {
    className?: string;
    value: ArticleType;
    onChangeType: (type: ArticleType) => void;
}

export const ArticleTypeTabs = memo(({
    className,
    value,
    onChangeType,
}: ArticleTypeTabsProps) => {
    const { t } = useTranslation();

    const typeTabs = useMemo<TabItem[]>(() => [
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
    ], [t]);

    const onTabClick = useCallback(
        (tab: TabItem) => {
            onChangeType(tab.value as ArticleType);
        },
        [onChangeType],
    );

    return (
        <Tabs className={classNames('', {}, [className])} tabs={typeTabs} value={value} onTabClick={onTabClick} />
    );
});
