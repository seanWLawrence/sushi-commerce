// @flow
import React from 'react'
import {cx, css} from 'emotion'
import bulmaClassnames from '../utils'
import {FeaturedImage} from '../components/images'
import {PageTitle} from '../components/titles'
import Price from '../components/price'
import {ProductFeatures} from '../components/features'
import Html from '../components/html'
import Tags from '../components/tags'
import {BuyButtons} from '../components/buttons'

type Props = {
  data: {
    markdownRemark: {
      frontmatter: {
        title: string,
        price: number,
        features: string[],
        featuredImage: {
          alt: string
        },
        tags: string[],
        paypalAddToCartButtonCode: string,
        paypalBuyNowButtonCode: string,
        coinbaseCommerceButtonCode: string
      },
      html: string
    },
    featuredImage: {
      sizes: {
        aspectRatio: string,
        sizes: string,
        src: string,
        srcSet: string,
        srcSetWebp: string,
        srcSetWebp: string
      }
    }
  }
}

let Product = ({data} : Props) => {

  let {
    markdownRemark: {
      frontmatter: {
        title,
        price,
        features,
        featuredImage: {
          alt
        },
        tags,
        paypalAddToCartButtonCode,
        paypalBuyNowButtonCode,
        coinbaseCommerceButtonCode
      },
      html
    },
    featuredImage: {
      sizes
    }
  } = data

  let sectionStyles = cx(css({maxWidth: '100vw', margin: 'auto', position: 'relative', zIndex: 0}), 'columns is-mobile is-centered')

  let innerSectionStyles = cx(bulmaClassnames({
    column: ['11-mobile', '8-tablet', '6-desktop']
  }), css({marginBottom: '60px'}));

  return (
    <section className={sectionStyles}>
      <div className={innerSectionStyles}>
        <FeaturedImage sizes={sizes} alt={alt}/>
        <PageTitle title={title}/>
        <Price price={price}/>
        <ProductFeatures features={features}/>
        <Html html={html}/>
        <Tags tags={tags}/>
      </div>
      <BuyButtons
        paypalBuyNowButtonCode={paypalBuyNowButtonCode}
        paypalAddToCartButtonCode={paypalAddToCartButtonCode}
        coinbaseCommerceButtonCode={coinbaseCommerceButtonCode}/>
    </section>
  )
}

export default Product

// $FlowFixMe
export let query = graphql ` 
  query ProductQuery($slug: String!, $featuredImage: String) {
    markdownRemark(fields: {
      slug: {
        eq: $slug
      }
    }) {
      fields {
        slug
      }
      frontmatter {
        title 
        price
        featuredImage {
          alt
        }
        features
        paypalAddToCartButtonCode
        paypalBuyNowButtonCode
        coinbaseCommerceButtonCode
        tags
      }
      html
    }
    featuredImage: imageSharp(id: {
      regex: $featuredImage
    }) {
      sizes(maxWidth : 700, quality : 65) {
        ...GatsbyImageSharpSizes_withWebp
      }
    }
  }
`