import * as React from 'react'
import FontAwesome from 'react-fontawesome'
import bulmaClassnames from '../utils'
import Link from 'gatsby-link'

let BackButton = (
  <Link
    to="/posts"
    title="posts"
    className="button"
    style={{
    marginBottom: '30px'
  }}>
    <FontAwesome name="arrow-left" style={{
      marginRight: '10px'
    }}/>
    All posts
  </Link>
)

let Image = ({image}) => {
  if (image) {
    let {src, alt} = image
    return (
      <figure className="image is-3by2">
        <img src={src} alt={alt}/>
      </figure>
    )
  }
  return null
}

let Tags = ({tags}) => {
  if (tags) {
    let displayTags = tags.map(tag => {
      return (
        <span className="tag is-info" key={tag}>
          {tag}
        </span>
      )
    })
    return <section className="tags">{displayTags}</section>
  }
  return null
}

let PostDate = ({date}) => {
  if (date) {
    return (
      <p
        className={bulmaClassnames({size: '5', textColor: 'gray', textTransformation: 'italic'})}
        style={{
        margin: '-10px 0 20px 0'
      }}>
        <date>{date}</date>
      </p>
    )
  }
  return null
}

let Html = ({html}) => {
  if (html) {
    return <div dangerouslySetInnerHTML={{
      __html: html
    }}/>
  }
  return null
}

type Props = {}

class PostPreview extends React.Component < Props > {
  render() {
    console.log(this.props)
    let {entry} = this.props;
    let title,
      featuredImage,
      date,
      tags,
      body;
    title = entry.getIn(['data', 'title'])
    featuredImage = entry.getIn(['data', 'featuredImage'])
    date = entry.getIn(['data', 'date'])
    tags = entry.getIn(['data', 'tags'])
    body = entry.getIn(['data', 'body'])
    return (
      <section
        className='columns is-mobile is-centered'
        style={{
        marginTop: '100px',
        marginBottom: '50px'
      }}>
        <div
          className={bulmaClassnames({
          column: ['11-mobile', '8-tablet', '6-desktop']
        })}>
          <BackButton/>
          <Image image={featuredImage}/>
          <h1 className={bulmaClassnames({raw: 'title', textAlign: 'left'})}>
            {title}
          </h1>
          <PostDate date={date}/>
          <Tags tags={tags}/>
          <Html html={body} marginTop="25px"/>
          <BackButton/>
        </div>
      </section>
    )
  }
}