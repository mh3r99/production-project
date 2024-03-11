import React, { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getArticleDetailsData } from '@/entities/Article';
import { getRouteArticleEdit } from '@/shared/const/router';
import { Card } from '@/shared/ui/redesigned/Card';
import cls from './AdditionalInfoContainer.module.scss';
import { ArticleAdditionalInfo } from '@/widgets/ArticleAdditionalInfo';

export const AdditionalInfoContainer = () => {
    const article = useSelector(getArticleDetailsData);
    const navigate = useNavigate();

    const onEditArticle = useCallback(() => {
        if (article) {
            navigate(getRouteArticleEdit(article.id));
        }
    }, [article, navigate]);

    if (!article) {
        return null;
    }

    const { user, createdAt, views } = article;
    return (
        <div>
            <Card className={cls.card} padding="24" border="br_round">
                <ArticleAdditionalInfo
                    author={user}
                    createdAt={createdAt}
                    views={views}
                    onEdit={onEditArticle}
                />
            </Card>
        </div>
    );
};
