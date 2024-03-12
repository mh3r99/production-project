import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Comment } from '../../model/types/comment';
import { CommentCard } from '../CommentCard/CommentCard';
import { ToggleFeatures } from '@/shared/lib/features/components/ToggleFeatures/ToggleFeatures';
import { Text } from '@/shared/ui/redesigned/Text';

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
                    <ToggleFeatures
                        feature="isAppRedesigned"
                        on={<Text text={t('Комментарии отсутствуют')} />}
                        off={
                            <TextDeprecated
                                text={t('Комментарии отсутствуют')}
                            />
                        }
                    />
                )}
            </VStack>
        );
    },
);
