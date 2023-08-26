import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { ArticleDetails } from 'entities/Article';
import { useParams } from 'react-router-dom';
import { Text } from 'shared/ui/Text/Text';
import { CommentList } from 'entities/Comment';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleDetailsPage.module.scss';

const ArticleDetailsPage = () => {
    const { t } = useTranslation('article-details');
    const { id } = useParams<{id:string}>();

    if (!id) {
        return <div>{t('Статья не найдена')}</div>;
    }

    return (
        <div className={classNames(cls.ArticleDetailsPage, {}, [])}>
            <ArticleDetails id={id} />
            <Text className={cls.commentTitle} title={t('Комментарии')} />
            <CommentList
                isLoading
                comments={[{
                    id: '1',
                    text: 'comment 1',
                    user: {
                        id: '1',
                        username: 'admin123',
                        avatar: 'https://techcrunch.com/wp-content/uploads/2021/01/GettyImages-1005344670.jpg',
                    },

                }, {
                    id: '2',
                    text: 'comment 2',
                    user: {
                        id: '2',
                        username: 'ankap user',
                        avatar: 'https://passportforrussians.com/wp-content/uploads/2021/10/web2-min.jpg',
                    },
                }]}
            />
        </div>
    );
};
export default memo(ArticleDetailsPage);
