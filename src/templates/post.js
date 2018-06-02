// @flow
import * as React from 'react'
import FontAwesome from 'react-fontawesome'
import Link from 'gatsby-link'
import bulmaClassnames, {ConditionalRender} from '../utils'
import Img from 'gatsby-image'

type Props = {
  data: {
    markdownRemark: {
      fields: {
        slug: string
      },
      frontmatter: {
        title: string,
        date: string,
        featuredImage: {
          alt: string
        },
        tags: string[]
      },
      html: string
    },
    featuredImage: {
      sizes: string[]
    }
  }
}

type Falsy = "" | 'undefined' | 0 | false

export default class Post extends React.Component < Props > {
  backButton() {
    return (
      <Link
        to="/posts"
        title="posts"
        className="button"
        style={{
        marginBottom: '30px'
      }}>
        <FontAwesome
          name="arrow-left"
          style={{
          marginRight: '10px'
        }}/>
        All posts
      </Link>
    )
  }

  featuredImage(sizes : string[], alt : string) {
    return (<Img sizes={sizes} alt={alt}/>)
  }

  title(title : string) {
    return (
      <h1
        className={bulmaClassnames({raw: 'title', textAlign: 'left'})}
        style={{
        marginTop: '30px',
        display: 'flex'
      }}>
        {title}
      </h1>
    )
  }

  date(date : string | Falsy) {
    return (
      <ConditionalRender prop={date}>
        <p
          className={bulmaClassnames({textColor: 'gray', textTransformation: 'italic'})}
          style={{
          margin: '-10px 0 20px 0',
          display: 'flex'
        }}>
          <date>{date}</date>
        </p>
      </ConditionalRender>
    )
  }

  html(html : string) {
    return (<div className="content" dangerouslySetInnerHTML={{
      __html: html
    }}/>)
  }

  tags(tags : string[]) {
    return (
      <ConditionalRender prop={tags}>
        <section className="tags">
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
    let {
      markdownRemark: {
        fields: {
          slug
        },
        frontmatter: {
          title,
          date,
          featuredImage: {
            alt
          },
          tags
        },
        html
      },
      featuredImage: {
        sizes
      }
    } = this.props.data
    return (
      <section
        className='columns is-mobile is-centered'
        style={{
        maxWidth: '100vw',
        margin: 0
      }}>
        <div
          className={bulmaClassnames({
          column: ['11-mobile', '8-tablet', '6-desktop']
        })}>
          {this.featuredImage(sizes, alt)}
          {this.title(title)}
          {this.date(date)}
          {this.html(html)}
          {this.tags(tags)}
          {this.backButton()}
        </div>
      </section>
    )
  }
}

// $FlowFixMe
export let query = graphql ` query PostQuery($slug: String!,
$featuredImage : String) {
  markdownRemark(fields : {
    slug: {
      eq: $slug
    }
  }) {
    fields {slug}
    frontmatter {
      title date(formatString : "MMMM DD, YYYY")featuredImage {alt}
      tags
    }
    html
  }
  featuredImage: imageSharp(id : {
    regex: $featuredImage
  }) {
    sizes(maxWidth : 700, quality : 65) {
      ...GatsbyImageSharpSizes_withWebp_tracedSVG
    }
  }
}
`