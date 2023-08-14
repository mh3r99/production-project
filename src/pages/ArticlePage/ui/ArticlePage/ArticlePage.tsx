import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';

const ArticlePage = () => {
    const { t } = useTranslation('article');
    return (
        <div>Article Page</div>
    );
};

export default memo(ArticlePage);
