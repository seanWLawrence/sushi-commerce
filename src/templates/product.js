// @flow
import React from 'react'
import bulmaClassnames from '../utils'
import {FeaturedImage, FeaturedImagePreview} from '../components/images'
import {PageTitle} from '../components/titles'
import Price from '../components/price'
import {ProductFeatures} from '../components/features'
import {Html, HtmlPreview} from '../components/html'
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
  },
  src?: string,
  body?: string
}

let Product = ({data, src, body} : Props) => {

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

  let sectionStyles = {
    maxWidth: '100vw',
    margin: 'auto',
    position: 'relative',
    zIndex: 0
  }

  let innerSectionStylesInline = {
    marginBottom: '60px'
  }

  let innerSectionStyles = bulmaClassnames({
    column: ['11-mobile', '8-tablet', '6-desktop']
  })

  return (
    <section style={sectionStyles} className='columns is-mobile is-centered'>
      <div style={innerSectionStylesInline} className={innerSectionStyles}>
        <FeaturedImage sizes={sizes} alt={alt}/>
        <FeaturedImagePreview src={src} alt={alt}/>
        <PageTitle title={title}/>
        <Price price={price}/>
        <ProductFeatures features={features}/>
        <Html html={html}/>
        <HtmlPreview body={body}/>
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

declare function graphql(query : string[]) : string;

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