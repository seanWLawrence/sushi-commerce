// @flow
import * as React from 'react';
import Link from 'gatsby-link';
import Img from 'gatsby-image';
import { withPrefix } from 'gatsby-link';
import bulmaClassnames, { ConditionalRender } from '../utils';
import type { GatsbyImageSizes } from '../types';

type FeaturedImageProps = {
  alt: string,
  src?: string,
  sizes?: GatsbyImageSizes,
  isPreview?: boolean,
};

export let FeaturedImage = ({
  alt,
  sizes = undefined,
  src = '',
  isPreview = false,
}: FeaturedImageProps) => {
  // renders standard image when used as a preview
  if (isPreview && src !== '') {
    let linkedSrc = withPrefix(src);

    let imageStyles = {
      maxWidth: '700px',
    };

    return <img src={linkedSrc} alt={alt} style={imageStyles} />;
  }

  // renders gatsby-image when sizes are passed
  return <Img sizes={sizes} alt={alt} />;
};

type GridProps = {
  src: string,
  alt: string,
  to: string,
};

// image with a gatsby-link component wrapper, for posts and products pages
export let GridImage = ({ src, alt, to }: GridProps) => {
  // uses gatsby-link's withPrefix() helper and slices the string to get the correct path
  let linkedSrc = withPrefix(src);
  return (
    <Link to={to}>
      <img src={linkedSrc} alt={alt} />
    </Link>
  );
};
