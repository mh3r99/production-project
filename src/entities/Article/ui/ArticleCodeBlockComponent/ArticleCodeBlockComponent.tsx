import React, { memo } from 'react';
import { Code } from 'src/shared/ui/deprecated/Code';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ArticleCodeBlock } from '../../model/types/article';

interface ArticleCodeBlockComponentProps {
    className?: string;
    block: ArticleCodeBlock;
}

export const ArticleCodeBlockComponent = memo(
    ({ className, block }: ArticleCodeBlockComponentProps) => (
        <div className={classNames('', {}, [className])}>
            <Code text={block.code} />
        </div>
    ),
);
