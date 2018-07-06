// @flow
import * as React from 'react';
import { ConditionalRender } from '../utils';
import type { Properties } from 'csstype';

type HtmlProps = {
  html: string,
  style?: Properties<string | number>,
  className?: string,
  isPreview?: boolean,
};

let Html = ({
  html,
  style = {},
  className = '',
  isPreview = false,
}: HtmlProps) => {
  if (isPreview) {
    return (
      <div style={style} className={`content ${className}`}>
        {html}
      </div>
    );
  }

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

export default Html;
