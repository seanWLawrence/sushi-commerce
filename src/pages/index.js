// @flow
import * as React from 'react'
import Img from 'gatsby-image'
import bulmaClassnames from '../utils'

type Props = {
  size: string
}

export default class Index extends React.Component < Props > {
  render() {
    let {
      data: {
        landingPage: {
          banner: {
            heading,
            subheading,
            height,
            button: {
              text,
              color,
              to
            }
          }
        },
        bannerImage: {
          sizes
        }
      }
    } = this.props

    let bannerHeadingStyles = bulmaClassnames({raw: 'title', textColor: 'white', textSize: '1'})
    let bannerSubheadingStyles = bulmaClassnames({raw: 'subtitle', textColor: 'white', textSize: '3'})
    let buttonStyles = bulmaClassnames({raw: 'button', is: color})
    return (
      <div
        className={`hero is-${height}`}
        style={{
        marginTop: '-45px'
      }}>
        <Img
          className="image"
          sizes={sizes}
          style={{
          position: "absolute",
          left: 0,
          top: '45px',
          width: "100%",
          height: "100%",
          zIndex: 0
        }}/>
        <div
          className="hero-body"
          style={{
          zIndex: 1,
          marginTop: '300px'
        }}>
          <div className="container">
            <h1 className={bannerHeadingStyles}>{heading}</h1>
            <h2 className={bannerSubheadingStyles}>{subheading}</h2>
            <button className={buttonStyles}>{text}</button>
          </div>
        </div>
      </div>
    )
  }
}

// $FlowFixMe
export let query = graphql `
  query IndexQuery {
    landingPage: dataYaml(id: {regex: "/landing-page/"}) {
      banner {
        heading
        subheading
        height
        button {
          text
          color
          to
        }
      }
    }
    bannerImage : imageSharp(id : {
      regex: "/banner/"
    }) {
      sizes(quality : 85) {
        ...GatsbyImageSharpSizes_withWebp_tracedSVG
      }
    }
  }
`