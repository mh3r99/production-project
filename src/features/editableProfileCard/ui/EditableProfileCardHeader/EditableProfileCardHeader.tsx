import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import {
    Button as ButtonDeprecated,
    ButtonTheme,
} from '@/shared/ui/deprecated/Button';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { HStack } from '@/shared/ui/redesigned/Stack';
import { classNames } from '@/shared/lib/classNames/classNames';
import { profileActions, updateProfileData } from '@/entities/Profile';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getUserAuthData } from '@/entities/User';
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData';
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly';
import { ToggleFeatures } from '@/shared/lib/features/components/ToggleFeatures/ToggleFeatures';
import { Text } from '@/shared/ui/redesigned/Text';
import { Button } from '@/shared/ui/redesigned/Button';
import { Card } from '@/shared/ui/redesigned/Card';

interface ProfilePageHeaderProps {
    className?: string;
}

export const EditableProfileCardHeader = ({
    className,
}: ProfilePageHeaderProps) => {
    const dispatch = useAppDispatch();
    const { t } = useTranslation('profile');
    const authData = useSelector(getUserAuthData);
    const profileData = useSelector(getProfileData);

    const canEdit = authData?.id === profileData?.id;

    const readonly = useSelector(getProfileReadonly);

    const onEdit = useCallback(() => {
        dispatch(profileActions.setReadonly(false));
    }, [dispatch]);

    const onCancelEdit = useCallback(() => {
        dispatch(profileActions.cancelEdit());
    }, [dispatch]);

    const onSave = useCallback(() => {
        dispatch(updateProfileData());
    }, [dispatch]);

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <Card max padding="24" border="br_partial">
                    <HStack
                        max
                        justify="between"
                        className={classNames('', {}, [className])}
                    >
                        <Text title={t('Профиль')} />
                        {canEdit && (
                            <div>
                                {readonly ? (
                                    <Button
                                        onClick={onEdit}
                                        data-testid="EditableProfileCardHeader.EditButton"
                                    >
                                        {t('Редактировать')}
                                    </Button>
                                ) : (
                                    <HStack gap="8">
                                        <Button
                                            onClick={onCancelEdit}
                                            data-testid="EditableProfileCardHeader.CancelButton"
                                            color="error"
                                        >
                                            {t('Отменить')}
                                        </Button>
                                        <Button
                                            onClick={onSave}
                                            data-testid="EditableProfileCardHeader.SaveButton"
                                            color="success"
                                        >
                                            {t('Сохранить')}
                                        </Button>
                                    </HStack>
                                )}
                            </div>
                        )}
                    </HStack>
                </Card>
            }
            off={
                <HStack
                    max
                    justify="between"
                    className={classNames('', {}, [className])}
                >
                    <TextDeprecated title={t('Профиль')} />
                    {canEdit && (
                        <div>
                            {readonly ? (
                                <ButtonDeprecated
                                    theme={ButtonTheme.OUTLINE}
                                    onClick={onEdit}
                                    data-testid="EditableProfileCardHeader.EditButton"
                                >
                                    {t('Редактировать')}
                                </ButtonDeprecated>
                            ) : (
                                <HStack gap="8">
                                    <ButtonDeprecated
                                        theme={ButtonTheme.OUTLINE_RED}
                                        onClick={onCancelEdit}
                                        data-testid="EditableProfileCardHeader.CancelButton"
                                    >
                                        {t('Отменить')}
                                    </ButtonDeprecated>
                                    <ButtonDeprecated
                                        theme={ButtonTheme.OUTLINE}
                                        onClick={onSave}
                                        data-testid="EditableProfileCardHeader.SaveButton"
                                    >
                                        {t('Сохранить')}
                                    </ButtonDeprecated>
                                </HStack>
                            )}
                        </div>
                    )}
                </HStack>
            }
        />
    );
};
