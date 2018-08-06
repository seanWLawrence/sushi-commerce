// @flow
import * as React from 'react';
import Link, { withPrefix } from 'gatsby-link';
import bulmaClassnames from '../../utils';
import { GridTitle } from '../../components/titles';
import { GridImage } from '../../components/images';
import Price from '../../components/price';

type Product = {
  node: {
    fields: {
      slug: string,
    },
    frontmatter: {
      title: string,
      price: number,
      featuredImage: {
        src: string,
        alt: string,
      },
      tags: string[],
    },
  },
};

type Props = {
  data: {
    allMarkdownRemark: {
      edges: Product[],
    },
  },
};

export default class Products extends React.Component<Props> {
  displayProducts(products: Product[]): React.Node[] {
    return products.map((product) => {
      let {
        node: {
          fields: { slug },
          frontmatter: {
            price,
            featuredImage: { src, alt },
            title,
          },
        },
      } = product;

      let sectionStylesInline = {
        minWidth: '200px',
      };

      let sectionStyles = bulmaClassnames({
        column: ['4-desktop', '6-tablet', '12-mobile'],
      });

      let titleStyles = {
        marginBottom: '0 !important',
      };

      return (
        <div style={sectionStylesInline} className={sectionStyles} key={title}>
          <GridImage to={slug} src={src} alt={alt} />
          <GridTitle title={title} to={slug} style={titleStyles} />
          <Price price={price} />
        </div>
      );
    });
  }

  render() {
    let {
      allMarkdownRemark: { edges: products },
    } = this.props.data;

    let outerSectionStyles = {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '95vw',
      maxWidth: '1250px',
      margin: 'auto',
      marginBottom: '200px',
    };

    let textStyles = bulmaClassnames({ raw: 'title', textSize: '2' });

    let innerSectionStylesInline = {
      margin: 'auto',
    };

    let innerSectionStyles = bulmaClassnames({
      raw: 'columns is-multiline',
      is: ['mobile', 'centered'],
    });

    return (
      <div style={outerSectionStyles}>
        <h1 className={textStyles}>Products</h1>
        <section
          style={innerSectionStylesInline}
          className={innerSectionStyles}
        >
          {this.displayProducts(products)}
        </section>
      </div>
    );
  }
}

declare function graphql(query: string[]): string;

export let query = graphql`
  query ProductsQuery {
    allMarkdownRemark(
      filter: { frontmatter: { template: { eq: "product" } } }
    ) {
      edges {
        node {
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
          }
        }
      }
    }
  }
`;
