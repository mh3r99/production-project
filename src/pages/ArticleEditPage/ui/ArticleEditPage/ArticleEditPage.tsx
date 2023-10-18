import React, { memo } from 'react';
import { Page } from 'widgets/Page/Page';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const ArticleEditPage = memo(() => {
    const { t } = useTranslation();
    const { id } = useParams<{ id: string }>();
    const isEdit = Boolean(id);

    return (
        <Page>
            {isEdit ? t('Редактирование статьи с ID = ') + id : t('Создание новой статьи')}
        </Page>
    );
});

export default ArticleEditPage;
