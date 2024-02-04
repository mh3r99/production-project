import React, { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Icon.module.scss';

interface IconProps extends React.SVGProps<SVGSVGElement> {
    className?: string;
    Svg: React.VFC<React.SVGProps<SVGSVGElement>>;
    inverted?: boolean;
}

/**
 * @deprecated
 */
export const Icon = memo(
    ({ Svg, className, inverted, ...otherProps }: IconProps) => (
        <Svg
            className={classNames(inverted ? cls.inverted : cls.Icon, {}, [
                className,
            ])}
            {...otherProps}
        />
    ),
);
