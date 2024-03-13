import React, { memo } from 'react';
import { Avatar as AvatarDeprecated } from '@/shared/ui/deprecated/Avatar';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { Skeleton as SkeletonDeprecated } from '@/shared/ui/deprecated/Skeleton';
import { Skeleton as SkeletonRedesigned } from '@/shared/ui/redesigned/Skeleton';
import { AppLink as AppLinkDeprecated } from '@/shared/ui/deprecated/AppLink';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './CommentCard.module.scss';
import { Comment } from '../../model/types/comment';
import { getRouteProfile } from '@/shared/const/router';
import { toggleFeatures } from '@/shared/lib/features';
import { ToggleFeatures } from '@/shared/lib/features/components/ToggleFeatures/ToggleFeatures';
import { Card } from '@/shared/ui/redesigned/Card';
import { AppLink } from '@/shared/ui/redesigned/AppLink';
import { Avatar } from '@/shared/ui/redesigned/Avatar';
import { Text } from '@/shared/ui/redesigned/Text';

interface CommentCardProps {
    className?: string;
    comment?: Comment;
    isLoading?: boolean;
}

export const CommentCard = memo(
    ({ className, comment, isLoading }: CommentCardProps) => {
        const Skeleton = toggleFeatures({
            name: 'isAppRedesigned',
            on: () => SkeletonRedesigned,
            off: () => SkeletonDeprecated,
        });

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
            <ToggleFeatures
                feature="isAppRedesigned"
                on={
                    <Card max padding="24" border="br_partial">
                        <VStack
                            data-testid="CommentCard.Content"
                            gap="8"
                            max
                            className={classNames(
                                cls.CommentCardRedesigned,
                                {},
                                [className],
                            )}
                        >
                            <AppLink to={getRouteProfile(comment.user.id)}>
                                <HStack gap="8">
                                    {comment.user.avatar ? (
                                        <Avatar
                                            size={30}
                                            src={comment.user.avatar}
                                        />
                                    ) : null}
                                    <Text text={comment.user.username} bold />
                                </HStack>
                            </AppLink>
                            <Text text={comment.text} />
                        </VStack>
                    </Card>
                }
                off={
                    <VStack
                        data-testid="CommentCard.Content"
                        max
                        gap="8"
                        className={classNames(cls.CommentCard, {}, [className])}
                    >
                        <AppLinkDeprecated
                            to={getRouteProfile(comment.user.id)}
                            className={cls.header}
                        >
                            {comment.user.avatar && (
                                <AvatarDeprecated
                                    size={30}
                                    src={comment.user.avatar}
                                />
                            )}
                            <TextDeprecated
                                className={cls.username}
                                title={comment.user.username}
                            />
                        </AppLinkDeprecated>
                        <TextDeprecated text={comment.text} />
                    </VStack>
                }
            />
        );
    },
);
