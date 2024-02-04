import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { Text, TextSize } from '@/shared/ui/deprecated/Text';
import { VStack } from '@/shared/ui/deprecated/Stack';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ArticleList } from '@/entities/Article';
import { useArticleRecommendationsList } from '../../api/aritcleRecommendationsApi';

interface ArticleRecommendationsListProps {
    className?: string;
}

export const ArticleRecommendationsList = memo(
    (props: ArticleRecommendationsListProps) => {
        const { className } = props;
        const { t } = useTranslation();

        const {
            data: articles,
            isLoading,
            isError,
        } = useArticleRecommendationsList(3);

        if (isLoading || isError || !articles) {
            return null;
        }

        return (
            <VStack
                gap="8"
                className={classNames('', {}, [className])}
                data-testid="ArticleRecommendationsList"
            >
                <Text size={TextSize.L} title={t('Рекомендуем')} />
                <ArticleList articles={articles} target="_blank" />
            </VStack>
        );
    },
);
