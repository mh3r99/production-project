import { ArticleImageBlock } from 'entities/Article/model/types/article';
import React, { memo } from 'react';
import { Text, TextAlign } from 'shared/ui/Text/Text';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleImageBlockComponent.module.scss';

interface ArticleImageBlockComponentProps{
    className?:string;
    block:ArticleImageBlock
}

export const ArticleImageBlockComponent = memo(({ className, block }:ArticleImageBlockComponentProps) => (
    <div className={classNames('', {}, [className])}>
        <img src={block.src} className={cls.img} alt={block.title} />
        {block.title && (
            <Text text={block.title} align={TextAlign.CENTER} />
        )}
    </div>
));
