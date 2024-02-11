import React, { memo } from 'react';
import { Avatar } from '@/shared/ui/deprecated/Avatar';
import { Text } from '@/shared/ui/deprecated/Text';
import { Skeleton } from '@/shared/ui/deprecated/Skeleton';
import { AppLink } from '@/shared/ui/deprecated/AppLink';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './CommentCard.module.scss';
import { Comment } from '../../model/types/comment';
import { getRouteProfile } from '@/shared/const/router';

interface CommentCardProps {
    className?: string;
    comment?: Comment;
    isLoading?: boolean;
}

export const CommentCard = memo(
    ({ className, comment, isLoading }: CommentCardProps) => {
        if (isLoading) {
            return (
                <VStack
                    max
                    gap="8"
                    className={classNames(cls.CommentCard, {}, [
                        className,
                        cls.loading,
                    ])}
                >
                    <div className={cls.header}>
                        <Skeleton width={30} height={30} border="50%" />
                        <Skeleton
                            width={100}
                            height={16}
                            className={cls.username}
                        />
                    </div>
                    <Skeleton width="100%" height={50} className={cls.text} />
                </VStack>
            );
        }

        if (!comment) {
            return null;
        }

        return (
            <VStack
                data-testid="CommentCard.Content"
                max
                gap="8"
                className={classNames(cls.CommentCard, {}, [className])}
            >
                <AppLink
                    to={getRouteProfile(comment.user.id)}
                    className={cls.header}
                >
                    {comment.user.avatar && (
                        <Avatar size={30} src={comment.user.avatar} />
                    )}
                    <Text
                        className={cls.username}
                        title={comment.user.username}
                    />
                </AppLink>
                <Text text={comment.text} />
            </VStack>
        );
    },
);
