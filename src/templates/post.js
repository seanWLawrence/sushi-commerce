// @flow
import React from 'react'
import {cx, css} from 'emotion'
import bulmaClassnames from '../utils'
import {FeaturedImage} from '../components/images'
import {PageTitle} from '../components/titles'
import Date from '../components/date'
import Html from '../components/html'
import Tags from '../components/tags'

type Props = {
  data: {
    markdownRemark: {
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

let Post = ({data} : Props) => {

  let {
    markdownRemark: {
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
  } = data

  let sectionStyles = cx(css({maxWidth: '100vw', margin: 'auto'}), 'columns is-mobile is-centered')

  let innerSectionStyles = bulmaClassnames({
    column: ['11-mobile', '8-tablet', '6-desktop']
  })

  return (
    <section className={sectionStyles}>
      <div className={innerSectionStyles}>
        <FeaturedImage sizes={sizes} alt={alt}/>
        <PageTitle title={title}/>
        <Date date={date}/>
        <Html html={html}/>
        <Tags tags={tags}/>
      </div>
    </section>
  )
}

export default Post

// $FlowFixMe
export let query = graphql ` query PostQuery($slug: String!,
$featuredImage : String) {
  markdownRemark(fields : {
    slug: {
      eq: $slug
    }
  }) {
    fields {
      slug
    }
    frontmatter {
      title date(formatString : "MMMM DD, YYYY")
      featuredImage {
        alt
      }
      tags
    }
    html
  }
  featuredImage: imageSharp(id : {
    regex: $featuredImage
  }) {
    sizes(maxWidth : 700, quality : 65) {
      ...GatsbyImageSharpSizes_withWebp
    }
  }
}
`