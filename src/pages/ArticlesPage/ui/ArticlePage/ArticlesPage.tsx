import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';

const ArticlesPage = () => {
    const { t } = useTranslation('article');
    return (
        <div />
    );
};

export default memo(ArticlesPage);
