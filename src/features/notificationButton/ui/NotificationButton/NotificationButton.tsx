import React, { memo, useCallback, useState } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import { Button, ButtonTheme } from 'src/shared/ui/deprecated/Button';
import { Icon } from 'src/shared/ui/deprecated/Icon';
import { Popover } from 'src/shared/ui/deprecated/Popups';
import { Drawer } from 'src/shared/ui/deprecated/Drawer';
import NotificationIcon from '@/shared/assets/icons/notification-20-20.svg';
import { NotificationList } from '@/entities/Notification';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './NotificationButton.module.scss';

interface NotificationButtonProps {
    className?: string;
}

export const NotificationButton = memo(
    ({ className }: NotificationButtonProps) => {
        const [isOpen, setIsOpen] = useState(false);

        const onOpenDrawer = useCallback(() => {
            setIsOpen(true);
        }, []);

        const onCloseDrawer = useCallback(() => {
            setIsOpen(false);
        }, []);

        const trigger = (
            <Button onClick={onOpenDrawer} theme={ButtonTheme.CLEAR}>
                <Icon Svg={NotificationIcon} inverted />
            </Button>
        );

        return (
            <>
                <BrowserView>
                    <Popover
                        className={classNames('', {}, [className])}
                        direction="bottom left"
                        trigger={trigger}
                    >
                        <NotificationList className={cls.notifications} />
                    </Popover>
                </BrowserView>
                <MobileView>
                    {trigger}
                    <Drawer isOpen={isOpen} onClose={onCloseDrawer}>
                        <NotificationList />
                    </Drawer>
                </MobileView>
            </>
        );
    },
);
