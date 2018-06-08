// @flow
import React from 'react'
import {cx, css} from 'emotion'
import Img from 'gatsby-image'
import bulmaClassnames from '../utils'

type Props = {
  banner: {
    heading: string,
    subheading: string,
    button: {
      text: string,
      color: string,
      to: string
    }
  },
  sizes: {
    aspectRatio: string,
    sizes: string,
    src: string,
    srcSet: string,
    srcSetWebp: string,
    srcSetWebp: string
  }
}

let Banner = ({banner, sizes} : Props) => {

  let {
    heading,
    subheading,
    button: {
      text,
      color,
      to
    }
  } = banner

  let sectionStyles = cx(css({marginTop: '-45px'}), 'hero is-fullheight')

  let imageStyles = cx(css({
    position: 'absolute',
    left: 0,
    top: '65px',
    width: '100%',
    height: '100%',
    zIndex: 0
  }), 'image')

  let bodyStyles = cx(css({zIndex: 1, marginTop: '300px'}), 'hero-body')

  let headingStyles = bulmaClassnames({raw: 'title', textColor: 'white', textSize: '1'})

  let subheadingStyles = bulmaClassnames({raw: 'subtitle', textColor: 'white', textSize: '3'})

  let buttonStyles = bulmaClassnames({raw: 'button', is: color})

  return (
    <div className={sectionStyles}>
      <Img className={imageStyles} sizes={sizes}/>
      <div className={bodyStyles}>
        <div className="container">
          <h1 className={headingStyles}>{heading}</h1>
          <h2 className={subheadingStyles}>{subheading}</h2>
          <button className={buttonStyles}>{text}</button>
        </div>
      </div>
    </div>
  )
}

export default Banner