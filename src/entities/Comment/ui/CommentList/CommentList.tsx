import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Text } from 'src/shared/ui/deprecated/Text';
import { VStack } from 'src/shared/ui/deprecated/Stack';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Comment } from '../../model/types/comment';
import { CommentCard } from '../CommentCard/CommentCard';

interface CommentListProps {
    className?: string;
    comments?: Comment[];
    isLoading?: boolean;
}

export const CommentList = memo(
    ({ className, comments, isLoading }: CommentListProps) => {
        const { t } = useTranslation();

        if (isLoading) {
            return (
                <VStack
                    max
                    gap="16"
                    className={classNames('', {}, [className])}
                >
                    <CommentCard isLoading={isLoading} />
                    <CommentCard isLoading={isLoading} />
                    <CommentCard isLoading={isLoading} />
                </VStack>
            );
        }

        return (
            <VStack max gap="16" className={classNames('', {}, [className])}>
                {comments?.length ? (
                    comments.map((comment) => (
                        <CommentCard
                            key={comment.id}
                            isLoading={isLoading}
                            comment={comment}
                        />
                    ))
                ) : (
                    <Text text={t('Комментарии отсутствуют')} />
                )}
            </VStack>
        );
    },
);
