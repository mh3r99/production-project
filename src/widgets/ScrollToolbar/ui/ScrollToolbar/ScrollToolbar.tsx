import { memo } from 'react';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ScrollToolbar.module.scss';
import { ScrollToTopButton } from '@/features/scrollToTopButton';

interface ScrollToolbarProps {
    className?: string;
}

export const ScrollToolbar = memo(({ className }: ScrollToolbarProps) => (
    <VStack
        className={classNames(cls.ScrollToolbar, {}, [className])}
        max
        align="center"
        justify="center"
    >
        <ScrollToTopButton />
    </VStack>
));
