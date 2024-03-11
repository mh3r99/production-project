import React, { memo } from 'react';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { Text } from '@/shared/ui/redesigned/Text';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ArticleTextBlock } from '../../model/types/article';
import cls from './ArticleTextBlockComponent.module.scss';
import { ToggleFeatures } from '@/shared/lib/features/components/ToggleFeatures/ToggleFeatures';

interface ArticleTextBlockComponentProps {
    className?: string;
    block: ArticleTextBlock;
}

export const ArticleTextBlockComponent = memo(
    ({ className, block }: ArticleTextBlockComponentProps) => (
        <div className={classNames('', {}, [className])}>
            {block.title && (
                <ToggleFeatures
                    feature="isAppRedesigned"
                    on={<Text className={cls.title} title={block.title} />}
                    off={
                        <TextDeprecated
                            className={cls.title}
                            title={block.title}
                        />
                    }
                />
            )}
            {block.paragraphs.map((paragraph, i) => (
                <ToggleFeatures
                    feature="isAppRedesigned"
                    on={
                        <Text
                            key={paragraph}
                            className={cls.paragraph}
                            text={paragraph}
                        />
                    }
                    off={
                        <TextDeprecated
                            key={paragraph}
                            className={cls.paragraph}
                            text={paragraph}
                        />
                    }
                />
            ))}
        </div>
    ),
);
