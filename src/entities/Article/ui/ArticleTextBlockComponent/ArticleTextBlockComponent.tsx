import React, { memo } from 'react';
import { Text } from '@/shared/ui/deprecated/Text';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ArticleTextBlock } from '../../model/types/article';
import cls from './ArticleTextBlockComponent.module.scss';

interface ArticleTextBlockComponentProps {
    className?: string;
    block: ArticleTextBlock;
}

export const ArticleTextBlockComponent = memo(
    ({ className, block }: ArticleTextBlockComponentProps) => (
        <div className={classNames('', {}, [className])}>
            {block.title && <Text className={cls.title} title={block.title} />}
            {block.paragraphs.map((paragraph, i) => (
                <Text
                    key={paragraph}
                    className={cls.paragraph}
                    text={paragraph}
                />
            ))}
        </div>
    ),
);
