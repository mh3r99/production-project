import { ArticleImageBlock } from 'entities/Article/model/types/article';
import React, { memo } from 'react';

interface ArticleImageBlockComponentProps{
    className?:string;
    block:ArticleImageBlock
}

export const ArticleImageBlockComponent = memo(({ className, block }:ArticleImageBlockComponentProps) => (
    <div>ArticleImageBlockComponent</div>
));
