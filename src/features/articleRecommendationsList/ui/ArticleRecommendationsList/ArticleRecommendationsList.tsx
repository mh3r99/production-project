import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { Text as TextDeprecated, TextSize } from '@/shared/ui/deprecated/Text';
import { Text } from '@/shared/ui/redesigned/Text';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ArticleList } from '@/entities/Article';
import { useArticleRecommendationsList } from '../../api/aritcleRecommendationsApi';
import { ToggleFeatures } from '@/shared/lib/features/components/ToggleFeatures/ToggleFeatures';

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
                <ToggleFeatures
                    feature="isAppRedesigned"
                    on={<Text size="l" title={t('Рекомендуем')} />}
                    off={
                        <TextDeprecated
                            size={TextSize.L}
                            title={t('Рекомендуем')}
                        />
                    }
                />
                <ArticleList articles={articles} target="_blank" />
            </VStack>
        );
    },
);
