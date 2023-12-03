import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import React, { memo, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import {
    fetchProfileData, profileActions,
    ProfileCard, profileReducer,
} from 'entities/Profile';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { VStack } from 'shared/ui/Stack';
import {
    EditableProfileCardHeader,
} from '../EditableProfileCardHeader/EditableProfileCardHeader';
import {
    getProfileError,
    getProfileForm,
    getProfileLoading,
    getProfileReadonly,
    getProfileValidateErrors,
} from '../../index';
import { ValidateProfileError } from '../../model/types/editableProfileCardSchema';

const reducers: ReducersList = {
    profile: profileReducer,
};
interface EditableProfileCardProps {
    className?: string;
    id:string;
}

export const EditableProfileCard = memo((props: EditableProfileCardProps) => {
    const { className, id } = props;
    const { t } = useTranslation('profile');

    const dispatch = useAppDispatch();

    const formData = useSelector(getProfileForm);
    const isLoading = useSelector(getProfileLoading);
    const error = useSelector(getProfileError);
    const readonly = useSelector(getProfileReadonly);
    const validateErrors = useSelector(getProfileValidateErrors);

    const validateErrorTranslates = {
        [ValidateProfileError.SERVER_ERROR]: t('Серверная ошибка при сохранении'),
        [ValidateProfileError.INCORRECT_USER_DATA]: t('Имя и фамилия обязательны'),
        [ValidateProfileError.INCORRECT_AGE]: t('Некорректный возраст'),
        [ValidateProfileError.INCORRECT_COUNTRY]: t('Некорректный регион'),
        [ValidateProfileError.NO_DATA]: t('Данные не указаны'),
    };

    useInitialEffect(() => {
        dispatch(fetchProfileData(id));
    });

    const onChangeFirstname = useCallback((value: string) => {
        dispatch(profileActions.updateProfile({
            first: value,
        }));
    }, [dispatch]);

    const onChangeLastname = useCallback((value: string) => {
        dispatch(profileActions.updateProfile({
            lastname: value,
        }));
    }, [dispatch]);

    const onChangeAge = useCallback((value: string) => {
        dispatch(profileActions.updateProfile({
            age: +value.replace(/[^0-9]/g, ''),
        }));
    }, [dispatch]);

    const onChangeCity = useCallback((value: string) => {
        dispatch(profileActions.updateProfile({
            city: value,
        }));
    }, [dispatch]);

    const onChangeUsername = useCallback((value: string) => {
        dispatch(profileActions.updateProfile({
            username: value,
        }));
    }, [dispatch]);

    const onChangeAvatar = useCallback((value: string) => {
        dispatch(profileActions.updateProfile({
            avatar: value,
        }));
    }, [dispatch]);

    const onChangeCurrency = useCallback((currency: Currency) => {
        dispatch(profileActions.updateProfile({
            currency,
        }));
    }, [dispatch]);

    const onChangeCountry = useCallback((country: Country) => {
        dispatch(profileActions.updateProfile({
            country,
        }));
    }, [dispatch]);

    return (
        <DynamicModuleLoader reducers={reducers}>
            <VStack gap="8" max className={classNames('', {}, [className])}>
                <EditableProfileCardHeader />

                {
                    validateErrors?.length && validateErrors.map((err) => (
                        <Text
                            key={err}
                            theme={TextTheme.ERROR}
                            text={validateErrorTranslates[err]}
                            data-testid="EditableProfileCard.Error"
                        />
                    ))
                }
                <ProfileCard
                    data={formData}
                    isLoading={isLoading}
                    error={error}
                    readonly={readonly}
                    onChangeFirstname={onChangeFirstname}
                    onChangeLastname={onChangeLastname}
                    onChangeAge={onChangeAge}
                    onChangeCity={onChangeCity}
                    onChangeUsername={onChangeUsername}
                    onChangeAvatar={onChangeAvatar}
                    onChangeCurrency={onChangeCurrency}
                    onChangeCountry={onChangeCountry}
                />
            </VStack>
        </DynamicModuleLoader>
    );
});
