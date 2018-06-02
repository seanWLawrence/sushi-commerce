// @flow
import * as React from 'react'
import bulmaClassnames, {ConditionalRender} from '../utils'

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

type Falsy = "" | 'undefined' | 0 | false

export default class Page extends React.Component < Props > {

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
          tags
        },
        html
      }
    } = this.props.data;

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
          {this.title(title)}
          {this.date(date)}
          {this.html(html)}
          {this.tags(tags)}
        </div>
      </section>
    )
  }
}

// $FlowFixMe
export let query = graphql ` 
query PageQuery($slug: String!) {
  markdownRemark(fields : {
    slug: {
      eq: $slug
    }
  }) {
    fields {slug}
    frontmatter {
      title 
      date(formatString : "MMMM DD, YYYY")
      tags
    }
    html
  }
}
`