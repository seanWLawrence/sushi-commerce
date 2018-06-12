// @flow
import * as React from 'react'
import {cx, css} from 'emotion'
import Link from 'gatsby-link'
import Img from 'gatsby-image'
import {withPrefix} from 'gatsby-link'
import bulmaClassnames from '../utils'

type FeaturedProps = {
  sizes: {
    aspectRatio: string,
    sizes: string,
    src: string,
    srcSet: string,
    srcSetWebp: string,
    srcSetWebp: string
  },
  alt: string
}

export let FeaturedImage = ({sizes, alt} : FeaturedProps) => {
  return <Img sizes={sizes} alt={alt}/>
}

type GridProps = {
  src: string,
  alt: string,
  to: string
}

export let GridImage = ({src, alt, to} : GridProps) => {
  let linkedSrc = './'.concat(src.slice(8))
  return (
    <Link to={to}>
      <img src={withPrefix(linkedSrc)} alt={alt}/>
    </Link>
  )
}