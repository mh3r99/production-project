import React, { memo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Button, ButtonTheme } from 'src/shared/ui/deprecated/Button';
import { HStack } from 'src/shared/ui/deprecated/Stack';
import { classNames } from '@/shared/lib/classNames/classNames';
import { getArticleDetailsData } from '@/entities/Article';
import { getCanEditArticle } from '../../model/selectors/article';
import { getRouteArticleEdit, getRouteArticles } from '@/shared/const/router';

interface ArticleDetailsPageHeaderProps {
    className?: string;
}

export const ArticleDetailsPageHeader = memo(
    ({ className }: ArticleDetailsPageHeaderProps) => {
        const { t } = useTranslation('article-details');
        const navigate = useNavigate();
        const article = useSelector(getArticleDetailsData);
        const canEdit = useSelector(getCanEditArticle);

        const onBackToList = () => {
            navigate(getRouteArticles());
        };

        const onEditArticle = () => {
            if (article) {
                navigate(getRouteArticleEdit(article.id));
            }
        };

        return (
            <HStack
                max
                justify="between"
                className={classNames('', {}, [className])}
            >
                <Button theme={ButtonTheme.OUTLINE} onClick={onBackToList}>
                    {t('Назад к списку')}
                </Button>
                {canEdit && (
                    <Button theme={ButtonTheme.OUTLINE} onClick={onEditArticle}>
                        {t('Редактировать')}
                    </Button>
                )}
            </HStack>
        );
    },
);
