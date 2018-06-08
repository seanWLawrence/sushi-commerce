// @flow
import React from 'react'
import {cx, css} from 'emotion'
import bulmaClassnames from '../utils'
import Banner from '../components/banner'
import About from '../components/about'
import {LandingFeatures} from '../components/features'
import Testimonials from '../components/testimonials'

type Props = {
  data: {
    landingPage: {
      banner: {
        heading: string,
        subheading: string,
        button: {
          text: string,
          color: string,
          to: string
        }
      },
      about: {
        heading: string,
        text: string
      },
      features: Array < {
        heading: string,
        icon: string,
        text: string
      } >,
      testimonials: Array < {
        name: string,
        text: string
      } >
    },
    bannerImage: {
      sizes: {
        aspectRatio: string,
        sizes: string,
        src: string,
        srcSet: string,
        srcSetWebp: string,
        srcSetWebp: string,
        tracedSVG: string
      }
    }
  }
}

let Index = ({data} : Props) => {
  let {
    landingPage: {
      banner,
      about,
      features,
      testimonials
    },
    bannerImage: {
      sizes
    }
  } = data

  return (
    <div>
      <Banner banner={banner} sizes={sizes}/>
      <About about={about}/>
      <LandingFeatures features={features}/>
      <Testimonials testimonials={testimonials}/>
    </div>
  )
}

export default Index

// $FlowFixMe
export let query = graphql `
  query IndexQuery {
    landingPage : dataYaml(id : {
      regex : "/landing-page/"
    }) {
      banner {
        heading subheading height button {
          text
          color
          to
        }
      }
      about {
        heading 
        text
      }
      features {
        heading 
        text 
        icon
      }
      testimonials {
        name 
        text
      }
    }
    bannerImage : imageSharp(id : {
      regex: "/banner/"
    }) {
      sizes(quality : 85) {
        ...GatsbyImageSharpSizes_withWebp
      }
    }
  }
  `