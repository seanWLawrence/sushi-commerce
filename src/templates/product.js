// @flow
import React from 'react';
import bulmaClassnames from '../utils';
import { FeaturedImage } from '../components/images';
import { PageTitle } from '../components/titles';
import Price from '../components/price';
import { ProductFeatures } from '../components/features';
import Html from '../components/html';
import Tags from '../components/tags';
import { BuyButtons } from '../components/buttons';
import type { GatsbyImageSizes } from '../types';

type Props = {
  data: {
    markdownRemark: {
      frontmatter: {
        title: string,
        price: number,
        features: string,
        featuredImage: {
          src?: string,
          alt: string,
        },
        tags: string[],
        paypalAddToCartButtonCode: string,
        paypalBuyNowButtonCode: string,
        coinbaseCommerceButtonLink: string,
      },
      html: string,
    },
    featuredImageSizes?: GatsbyImageSizes,
    isPreview?: boolean,
  },
};

let Product = ({ data }: Props) => {
  let {
    markdownRemark: {
      frontmatter: {
        title,
        price,
        features,
        featuredImage: { src, alt },
        tags,
        paypalAddToCartButtonCode,
        paypalBuyNowButtonCode,
        coinbaseCommerceButtonLink,
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
    margin: 'auto',
    position: 'relative',
    zIndex: 1,
  };

  let innerSectionStylesInline = {
    marginBottom: '60px',
  };

  let innerSectionStyles = bulmaClassnames({
    column: ['11-mobile', '8-tablet', '6-desktop'],
  });

  return (
    <section style={sectionStyles} className="columns is-mobile is-centered">
      <div style={innerSectionStylesInline} className={innerSectionStyles}>
        <FeaturedImage
          sizes={sizes}
          src={src}
          alt={alt}
          isPreview={isPreview}
        />
        <PageTitle title={title} />
        <Price price={price} />
        <ProductFeatures features={features} />
        <Html html={html} isPreview={isPreview} />
        <Tags tags={tags} />
      </div>
      <BuyButtons
        paypalBuyNowButtonCode={paypalBuyNowButtonCode}
        paypalAddToCartButtonCode={paypalAddToCartButtonCode}
        coinbaseCommerceButtonCode={coinbaseCommerceButtonLink}
      />
    </section>
  );
};

export default Product;

declare function graphql(query: string[]): string;

export let query = graphql`
  query ProductQuery($slug: String!, $featuredImage: String) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      fields {
        slug
      }
      frontmatter {
        title
        price
        featuredImage {
          src
          alt
        }
        features
        paypalAddToCartButtonCode
        paypalBuyNowButtonCode
        coinbaseCommerceButtonLink
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
