// @flow
import React from 'react'
import {cx, css} from 'emotion'
import bulmaClassnames from '../utils'
import {PageTitle} from '../components/titles'
import Html from '../components/html'
import Tags from '../components/tags'

type Props = {
  data: {
    markdownRemark: {
      fields: {
        slug: string
      },
      frontmatter: {
        title: string,
        date: string,
        tags: string[]
      },
      html: string
    }
  }
}

let Page = ({data} : Props) => {
  let {
    markdownRemark: {
      frontmatter: {
        title,
        tags
      },
      html
    }
  } = data

  let sectionStyles = cx(css({maxWidth: '100vw', margin: 0}), 'columns is-mobile is-centered')

  let innerSectionStyles = bulmaClassnames({
    column: ['11-mobile', '8-tablet', '6-desktop']
  })

  return (
    <section className={sectionStyles}>
      <div className={innerSectionStyles}>
        <PageTitle title={title}/>
        <Html html={html}/>
        <Tags tags={tags}/>
      </div>
    </section>
  )
}

export default Page

// $FlowFixMe
export let query = graphql ` 
query PageQuery($slug: String!, $featuredImage: String) {
  markdownRemark(fields : {
    slug: {
      eq: $slug
    }
  }) {
    frontmatter {
      title 
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