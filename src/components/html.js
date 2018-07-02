// @flow
import * as React from 'react';
import { ConditionalRender } from '../utils';
import type { Properties } from 'csstype';

type HtmlProps = {
  html: string,
  style?: Properties<string | number>,
  className?: string,
};

export let Html = ({ html, style = {}, className = '' }: HtmlProps) => {
  return (
    <div
      style={style}
      className={`content ${className}`}
      dangerouslySetInnerHTML={{
        __html: html,
      }}
    />
  );
};

type HtmlPreviewProps = {
  body?: string,
  style?: Properties<string | number>,
  className?: string,
};

export let HtmlPreview = ({
  body,
  style = {},
  className = '',
}: HtmlPreviewProps) => {
  return (
    <ConditionalRender prop={body}>
      <div style={style} className={`content ${className}`}>
        {body}
      </div>
    </ConditionalRender>
  );
};
