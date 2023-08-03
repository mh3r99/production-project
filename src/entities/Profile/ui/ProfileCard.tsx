import React from 'react';
import { useTranslation } from 'react-i18next';
import { Mods, classNames } from 'shared/lib/classNames/classNames';
import { Text, TextAlign, TextTheme } from 'shared/ui/Text/Text';
import { Input } from 'shared/ui/Input/Input';
import { Loader } from 'shared/ui/Loader/Loader';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import cls from './ProfileCard.module.scss';
import { Profile } from '../model/types/profile';

interface ProfileCardProps{
  className?:string;
  data?:Profile;
  isLoading?:boolean;
  error?:string;
  readonly?:boolean;
  onChangeFirstname?:(value:string)=>void;
  onChangeLastname?:(value:string)=>void;
  onChangeAge?:(value:string)=>void;
  onChangeCity?:(value:string)=>void;
  onChangeUsername?:(value:string)=>void;
  onChangeAvatar?:(value:string)=>void;
}

export const ProfileCard = ({
    className, data, isLoading, error, readonly,
    onChangeFirstname, onChangeLastname, onChangeAge,
    onChangeCity, onChangeUsername, onChangeAvatar,
}:ProfileCardProps) => {
    const { t } = useTranslation('profile');

    if (isLoading) {
        return (
            <div
                className={
                    classNames(cls.ProfileCard, {}, [className, cls.loading])
                }
            >
                <Loader />
            </div>
        );
    }

    if (error) {
        return (
            <div
                className={
                    classNames(cls.ProfileCard, {}, [className, cls.error])
                }
            >
                <Text
                    theme={TextTheme.ERROR}
                    title={t('Произошла ошибка при загрузке профиля')}
                    text={t('Попробуйте обновить страницу')}
                    align={TextAlign.CENTER}
                />
            </div>
        );
    }

    const mods:Mods = {
        [cls.editing]: !readonly,
    };

    return (
        <div
            className={
                classNames(cls.ProfileCard, mods, [className])
            }
        >
            {
                data?.avatar && (
                    <div className={cls.avatarWrapper}>
                        <Avatar src={data.avatar} />
                    </div>
                )
            }

            <Input
                value={data?.first}
                placeholder={t('Ваше имя')}
                className={cls.input}
                onChange={onChangeFirstname}
                readonly={readonly}
            />
            <Input
                value={data?.lastname}
                placeholder={t('Ваше фамилия')}
                className={cls.input}
                onChange={onChangeLastname}
                readonly={readonly}
            />
            <Input
                value={data?.age}
                placeholder={t('Ваш возраст')}
                className={cls.input}
                onChange={onChangeAge}
                readonly={readonly}
            />
            <Input
                value={data?.city}
                placeholder={t('Город')}
                className={cls.input}
                onChange={onChangeCity}
                readonly={readonly}
            />
            <Input
                value={data?.username}
                placeholder={t('Введите имя пользователя')}
                className={cls.input}
                onChange={onChangeUsername}
                readonly={readonly}
            />
            <Input
                value={data?.avatar}
                placeholder={t('Введите ссылку на аватар')}
                className={cls.input}
                onChange={onChangeAvatar}
                readonly={readonly}
            />

        </div>
    );
};
