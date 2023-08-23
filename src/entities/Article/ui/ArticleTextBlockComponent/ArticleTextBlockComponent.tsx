import { ArticleTextBlock } from 'entities/Article/model/types/article';
import React, { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text/Text';
import cls from './ArticleTextBlockComponent.module.scss';

interface ArticleTextBlockComponentProps{
    className?:string;
    block:ArticleTextBlock
}

export const ArticleTextBlockComponent = memo(({ className, block }:ArticleTextBlockComponentProps) => (
    <div className={classNames(cls.ArticleTextBlockComponent, {}, [className])}>
        {block.title && (
            <Text className={cls.title} title={block.title} />
        )}
        {block.paragraphs.map((paragraph, i) => (
            <Text key={paragraph} className={cls.paragraph} text={paragraph} />
        ))}
    </div>
));
