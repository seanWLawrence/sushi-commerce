// @flow
import * as React from 'react'
import {cx, css} from 'emotion'
import Link, {withPrefix} from 'gatsby-link'
import bulmaClassnames from '../../utils'
import {GridTitle} from '../../components/titles'
import {GridImage} from '../../components/images'

type Post = {
  node: {
    fields: {
      slug: string
    },
    excerpt: string,
    frontmatter: {
      title: string,
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
      edges: Post[]
    }
  }
}

let Excerpt = ({excerpt}) => {
  let sectionStyles = css({margin: '10px auto'})

  return (
    <p className={sectionStyles}>{excerpt}</p>
  )
}

let To = ({to}) => {
  return (
    <Link to={to}>Read more...</Link>
  )
}

export default class Posts extends React.Component < Props > {

  displayPosts(posts : Post[]) {
    return posts.map(post => {
      let {
        node: {
          excerpt,
          fields: {
            slug
          },
          frontmatter: {
            featuredImage: {
              src,
              alt
            },
            title
          }
        }
      } = post

      let sectionStyles = cx(bulmaClassnames({
        column: ['4-desktop', '6-tablet', '11-mobile']
      }))

      return (
        <div className={sectionStyles} key ={title}>
          <GridImage src={src} alt={alt}/>
          <GridTitle title={title}/>
          <Excerpt excerpt={excerpt}/>
          <To to={slug}/>
        </div>
      )
    })
  }

  render() {
    let {
      allMarkdownRemark: {
        edges: posts
      }
    } = this.props.data;

    let sectionStyles = cx(css({maxWidth: '100vw', margin: 0}), bulmaClassnames({
      raw: 'columns',
      is: ['mobile', 'centered']
    }))

    return (
      <section className={sectionStyles}>
        {this.displayPosts(posts)}
      </section>
    )
  }
}

// $FlowFixMe
export let query = graphql ` query PostsQuery {
  allMarkdownRemark(filter: {frontmatter: {template: {eq: "post"}}}) {
    edges {
      node {
        excerpt
        fields { 
          slug
        }
        frontmatter {
          title
          tags
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