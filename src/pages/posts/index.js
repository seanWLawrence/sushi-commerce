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
      }
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

  displayPosts(posts : Post[]) : React.Node[] {
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

      let outerSectionStyles = css({display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '200px'})

      let textStyles = bulmaClassnames({raw: 'title', textSize: '2'})

      let innerSectionStyles = cx(bulmaClassnames({
        column: ['4-desktop', '6-tablet', '11-mobile']
      }))

      return (
        <div className={outerSectionStyles}>
          <h1 className={textStyles}>Posts</h1>
          <div className={innerSectionStyles} key ={title}>
            <GridImage src={src} alt={alt} to={slug}/>
            <GridTitle title={title} to={slug}/>
            <Excerpt excerpt={excerpt}/>
            <To to={slug}/>
          </div>
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