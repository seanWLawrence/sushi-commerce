// @flow
import * as React from 'react'
import FontAwesome from 'react-fontawesome'
import {cx, css} from 'emotion'
import bulmaClassnames, {ConditionalRender} from '../utils'
import Img from 'gatsby-image'
import {Buttons} from '../components/buttons'

type Props = {
  data: {
    markdownRemark: {
      fields: {
        slug: string
      },
      frontmatter: {
        title: string,
        price: number,
        features: string[],
        image: {
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
      sizes: string[]
    }
  }
}

type Falsy = "" | typeof undefined | 0 | false

export default class Post extends React.Component < Props > {

  featuredImage(sizes : string[] | Falsy, alt : string) {
    return (
      <ConditionalRender prop={sizes}>
        <Img sizes={sizes} alt={alt}/>
      </ConditionalRender>
    )
  }

  title(title : string) {
    return (
      <h1
        className={bulmaClassnames({raw: 'title', textAlign: 'left'})}
        style={{
        margin: '30px 0 0 0',
        display: 'flex'
      }}>
        {title}
      </h1>
    )
  }

  price(price : number) {
    let priceStyles = bulmaClassnames({textColor: 'gray', textSize: '4'})
    return (
      <span className={priceStyles}>${price}</span>
    )
  }

  features(features : string[]) {
    let titleStyles = bulmaClassnames({raw: 'title', textSize: '5', textColor: 'grey-dark'})
    let displayFeatures = features.map(feature => {
      return (
        <li key={feature} className="menu-item">{feature}</li>
      )
    })

    return (
      <aside className="menu" style={{
        marginTop: '20px'
      }}>
        <h2 className={titleStyles}>Features</h2>
        <ul className="menu-list">
          {displayFeatures}
        </ul>
      </aside>
    )
  }

  html(html : string) {
    let titleStyles = bulmaClassnames({raw: 'title', textSize: '5', textColor: 'grey-dark'})
    return (
      <div>
        <h2 className={titleStyles} style={{
          marginTop: '20px'
        }}>Details</h2>
        <div
          className="content"
          dangerouslySetInnerHTML={{
          __html: html
        }}/>
      </div>
    )
  }

  tags(tags : string[]) {
    let styles = cx(css({marginTop: '20px'}), "tags")
    return (
      <ConditionalRender prop={tags}>
        <section className={styles}>
          {tags.map(tag => {
            return (
              <span className="tag is-info" key={tag}>
                {tag}
              </span>
            )
          })}
        </section>
      </ConditionalRender>
    )
  }

  render() {
    console.table(this.props.data)
    let {
      markdownRemark: {
        fields: {
          slug
        },
        frontmatter: {
          title,
          price,
          features,
          image: {
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
    } = this.props.data

    let styles = cx(bulmaClassnames({
      column: ['11-mobile', '8-tablet', '6-desktop']
    }), css({marginBottom: '60px'}));

    return (
      <section
        className='columns is-mobile is-centered'
        style={{
        maxWidth: '100vw',
        margin: 0
      }}>
        <div className={styles}>
          {this.featuredImage(sizes, alt)}
          {this.title(title)}
          {this.price(price)}
          {this.features(features)}
          {this.html(html)}
          {this.tags(tags)}
        </div>
        <Buttons
          paypalBuyNowButtonCode={paypalBuyNowButtonCode}
          paypalAddToCartButtonCode={paypalAddToCartButtonCode}
          coinbaseCommerceButtonCode={coinbaseCommerceButtonCode}/>
      </section>
    )
  }
}

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
        image {
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
        ...GatsbyImageSharpSizes_withWebp_tracedSVG
      }
    }
  }
`