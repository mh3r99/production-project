import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { ArticleDetails } from 'entities/Article';
import { useParams } from 'react-router-dom';

const ArticleDetailsPage = () => {
    const { t } = useTranslation('article-details');
    const { id } = useParams<{id:string}>();

    if (!id) {
        return <div>{t('Статья не найдена')}</div>;
    }

    return (
        <div>
            <ArticleDetails id={id} />
        </div>
    );
};
export default memo(ArticleDetailsPage);
