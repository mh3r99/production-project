import { ArticleCodeBlock } from 'entities/Article/model/types/article';
import React, { memo } from 'react';

interface ArticleCodeBlockComponentProps{
    className?:string;
    block:ArticleCodeBlock
}

export const ArticleCodeBlockComponent = memo(({ className, block }:ArticleCodeBlockComponentProps) => (
    <div>ArticleCodeBlockComponent</div>
));
