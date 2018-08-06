// @flow
import * as React from 'react';
import Link from 'gatsby-link';
import bulmaClassnames from '../utils';

type PageTitleProps = {
  title: string,
  className?: string,
};

export let PageTitle = ({ title, className = '' }: PageTitleProps) => {
  let textStylesInline = {
    marginTop: '30px',
    display: 'flex',
  };

  let textStyles = bulmaClassnames({ raw: 'title', textAlign: 'left' });

  return (
    <h1 style={textStylesInline} className={`${textStyles} ${className}`}>
      {title}
    </h1>
  );
};

type GridTitleProps = {
  title: string,
  to: string,
  className?: string,
};

export let GridTitle = ({ title, to, className = '' }: GridTitleProps) => {
  let textStylesInline = {
    margin: '20px auto',
  };
  let textStyles = bulmaClassnames({
    raw: 'title',
    textSize: '3',
    textAlign: 'left',
  });

  return (
    <Link to={to}>
      <h2 style={textStylesInline} className={`${textStyles} ${className}`}>
        {title}
      </h2>
    </Link>
  );
};
