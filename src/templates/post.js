// @flow
import React from 'react'
import bulmaClassnames from '../utils'
import {FeaturedImage, FeaturedImagePreview} from '../components/images'
import {PageTitle} from '../components/titles'
import Date from '../components/date'
import {Html, HtmlPreview} from '../components/html'
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
  },
  src?: string,
  body?: string
}

let Post = ({data, src, body} : Props) => {

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

  let sectionStyles = {
    maxWidth: '100vw',
    margin: 'auto'
  }

  let innerSectionStyles = bulmaClassnames({
    column: ['11-mobile', '8-tablet', '6-desktop']
  })

  return (
    <section style={sectionStyles} className='columns is-mobile is-centered'>
      <div className={innerSectionStyles}>
        <FeaturedImage sizes={sizes} alt={alt}/>
        <FeaturedImagePreview src={src} alt={alt}/>
        <PageTitle title={title}/>
        <Date date={date}/>
        <Html html={html}/>
        <HtmlPreview body={body}/>
        <Tags tags={tags}/>
      </div>
    </section>
  )
}

export default Post

declare function graphql(query : string[]) : string;

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
      title 
      date(formatString : "MMMM DD, YYYY")
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