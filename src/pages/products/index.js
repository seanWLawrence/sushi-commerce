// @flow
import * as React from 'react'
import {cx, css} from 'emotion'
import Link, {withPrefix} from 'gatsby-link'
import bulmaClassnames from '../../utils'
import {GridTitle} from '../../components/titles'
import {GridImage} from '../../components/images'
import Price from '../../components/price'

type Product = {
  node: {
    fields: {
      slug: string
    },
    frontmatter: {
      title: string,
      price: number,
      featuredImage: {
        src: string,
        alt: string
      },
      tags: string[]
    }
  }
}

type Props = {
  data: {
    allMarkdownRemark: {
      edges: Product[]
    }
  }
}

export default class Products extends React.Component < Props > {

  displayProducts(products : Product[]) : React.Node[] {
    return products.map(product => {
      let {
        node: {
          fields: {
            slug
          },
          frontmatter: {
            price,
            featuredImage: {
              src,
              alt
            },
            title
          }
        }
      } = product

      let sectionStyles = cx(css({minWidth: '200px'}), bulmaClassnames({
        column: ['4-desktop', '6-tablet', '11-mobile']
      }))

      let titleStyles = css({marginBottom: '0 !important'})

      return (
        <div className={sectionStyles} key={title}>
          <GridImage to={slug} src={src} alt={alt}/>
          <GridTitle title={title} to={slug} extraClassname={titleStyles}/>
          <Price price={price}/>
        </div>
      )
    })
  }

  render() {
    let {
      allMarkdownRemark: {
        edges: products
      }
    } = this.props.data;

    let outerSectionStyles = css({display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '200px'})

    let textStyles = bulmaClassnames({raw: 'title', textSize: '2'})

    let innerSectionStyles = cx(css({maxWidth: '100vw', margin: 0}), bulmaClassnames({
      raw: 'columns',
      is: ['mobile', 'centered']
    }))

    return (
      <div className={outerSectionStyles}>
        <h1 className={textStyles}>Products</h1>
        <section className={innerSectionStyles}>
          {this.displayProducts(products)}
        </section>
      </div>
    )
  }
}

// $FlowFixMe
export let query = graphql ` query ProductsQuery {
  allMarkdownRemark(filter: {frontmatter: {template: {eq: "product"}}}) {
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
`