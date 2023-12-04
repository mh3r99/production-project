import React from 'react';
import { Page } from 'widgets/Page/Page';
import { useTranslation } from 'react-i18next';

const AdminPanelPage = () => {
    const { t } = useTranslation('');
    return <Page>{t('AdminPanelPage')}</Page>;
};

export default AdminPanelPage;
