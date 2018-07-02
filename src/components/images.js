// @flow
import * as React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'
import {withPrefix} from 'gatsby-link'
import bulmaClassnames, {ConditionalRender, linkSrcToStaticImage} from '../utils'

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

// gatsby-image component with the name FeaturedImage for clarity, since that
// what this component is used for
export let FeaturedImage = ({sizes, alt} : FeaturedProps) => {

  // if sizes are not passed as props, i.e. we're in the Netlify CMS
  // dashboard/preview mode mode, don't render image
  return (
    <ConditionalRender prop={sizes}>
      <Img sizes={sizes} alt={alt}/>
    </ConditionalRender>
  )
}

type GridProps = {
  src: string,
  alt: string,
  to: string
}

// standard image with a gatsby-link component wrapped around it, for posts and
// products pages
export let GridImage = ({src, alt, to} : GridProps) => {
  let linkedSrc = linkSrcToStaticImage(src)
  return (
    <Link to={to}>
      <img src={linkedSrc} alt={alt}/>
    </Link>
  )
}

type FeaturedImagePreviewProps = {
  src?: string,
  alt: string
}

// preview component for use in Netlify CMS when editing a product or post
export let FeaturedImagePreview = ({src, alt} : FeaturedImagePreviewProps) => {

  // if src prop exists (i.e. if using the Netlify CMS dashboard), render image
  if (src) {
    let linkedSrc = linkSrcToStaticImage(src)
    let imageStyles = {
      maxWidth: '700px'
    }

    return <img src={linkedSrc} alt={alt} style={imageStyles}/>
  }

  // if on website, don't render image
  return null
}