// @flow
import React from 'react';
import bulmaClassnames from '../utils';
import { FeaturedImage } from '../components/images';
import { PageTitle } from '../components/titles';
import Date from '../components/date';
import Html from '../components/html';
import Tags from '../components/tags';
import type { GatsbyImageSizes } from '../types';

type Props = {
  data: {
    markdownRemark: {
      frontmatter: {
        title: string,
        date: string,
        featuredImage: {
          src?: string,
          alt: string,
        },
        tags: string[],
      },
      html: string,
    },
    featuredImageSizes?: GatsbyImageSizes,
    isPreview?: boolean,
  },
};

let Post = ({ data }: Props) => {
  let {
    markdownRemark: {
      frontmatter: {
        title,
        date,
        featuredImage: { src, alt },
        tags,
      },
      html,
    },
    featuredImageSizes,
    isPreview,
  } = data;

  let sizes;

  // if one of these props exist, assign it to the sizes or src variable
  if (featuredImageSizes !== undefined) {
    sizes = featuredImageSizes.sizes;
  }

  let sectionStyles = {
    maxWidth: '100vw',
    margin: '50px auto',
  };

  let innerSectionStyles = bulmaClassnames({
    column: ['11-mobile', '8-tablet', '6-desktop'],
  });

  return (
    <section style={sectionStyles} className="columns is-mobile is-centered">
      <div className={innerSectionStyles}>
        <FeaturedImage
          sizes={sizes}
          src={src}
          alt={alt}
          isPreview={isPreview}
        />
        <PageTitle title={title} />
        <Date date={date} />
        <Html html={html} isPreview={isPreview} />
        <Tags tags={tags} />
      </div>
    </section>
  );
};

export default Post;

declare function graphql(query: string[]): string;

export let query = graphql`
  query PostQuery($slug: String!, $featuredImage: String) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      fields {
        slug
      }
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        featuredImage {
          src
          alt
        }
        tags
      }
      html
    }
    featuredImageSizes: imageSharp(id: { regex: $featuredImage }) {
      sizes(maxWidth: 700, quality: 75) {
        ...GatsbyImageSharpSizes_withWebp
      }
    }
  }
`;
