// @flow
import * as React from 'react'
import Img from 'gatsby-image'
import {cx, css} from 'emotion'
import FontAwesome from 'react-fontawesome'
import bulmaClassnames from '../utils'

let Banner = ({banner, sizes}) => {
  console.log(banner)

  let {
    heading,
    subheading,
    height,
    button: {
      text,
      color,
      to
    }
  } = banner

  let imageStyles = cx(css({}), 'image')

  let bodyStyles = cx(css({zIndex: 1, marginTop: '300px'}), 'hero-body')

  let headingStyles = bulmaClassnames({raw: 'title', textColor: 'white', textSize: '1'})

  let subheadingStyles = bulmaClassnames({raw: 'subtitle', textColor: 'white', textSize: '3'})

  let buttonStyles = bulmaClassnames({raw: 'button', is: color})

  return (
    <div className={`hero is-${height}`} style={{
      marginTop: '-45px'
    }}>
      <Img
        className="image"
        sizes={sizes.sizes}
        style={{
        position: "absolute",
        left: 0,
        top: '65px',
        width: "100%",
        height: "100%",
        zIndex: 0
      }}/>
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

let About = ({about}) => {
  let {heading, text} = about;
  let titleStyles = bulmaClassnames({raw: 'title', textSize: '2', textAlign: 'centered'})

  let Title = ({heading}) => (
    <h2 className={titleStyles}>
      {heading}
    </h2>
  )

  let sectionStyles = cx('hero is-medium', css({padding: '50px', margin: '0 auto'}), bulmaClassnames({
    column: ['6-desktop', '7-tablet', '11-mobile']
  }))
  let textStyles = bulmaClassnames({textSize: '4', textAlign: 'centered'})

  return (
    <section className={sectionStyles}>
      <section className="hero-body">
        <Title heading={heading}/>
        <p className={textStyles}>{text}</p>
      </section>
    </section>
  )
}

let Features = ({features}) => {
  let FeatureList = features.map(feature => {
    let {heading, text, icon} = feature
    let featureStyles = bulmaClassnames({
      column: ['12-mobile', '3-tablet', '3-desktop']
    })
    let iconStyles = {
      margin: '5px auto',
      width: '100%'
    }
    let headingStyles = bulmaClassnames({raw: 'title', textSize: '4', textAlign: 'centered'})
    let textStyles = bulmaClassnames({raw: 'subtitle', textAlign: 'centered'})
    return (
      <div className={featureStyles} key={heading}>
        <FontAwesome
          name={icon}
          size="2x"
          style={iconStyles}
          className="has-text-centered"/>
        <h3 className={headingStyles}>{heading}</h3>
        <p className={textStyles}>{text}</p>
      </div>
    )
  })
  return (
    <div className="hero is-small is-primary">
      <div className="hero-body columns is-centered">
        {FeatureList}
      </div>
    </div>
  )
}

let Testimonials = ({testimonials}) => {

  let Testimonial = ({name, text, image}) => {
    let sectionStyles = cx(bulmaClassnames({
      column: ['11-mobile', '10-tablet', '4-desktop']
    }), css({margin: '20px'}));
    let textStyles = bulmaClassnames({textSize: '4'})
    let nameStyles = bulmaClassnames({textColor: 'grey-darker'})
    return (
      <div className={sectionStyles}>
        <p className={textStyles}>
          "{text}"
          <br/>
          <i className={nameStyles}>{name}</i>
        </p>
      </div>
    )
  }

  let outerSectionStyles = css({margin: '100px'})
  let innerSectionStyles = cx('columns is-centered', css({margin: '50px auto'}));
  let headingStyles = cx(bulmaClassnames({raw: 'title', textSize: '2', textAlign: 'centered'}), css({marginTop: '40px'}));

  return (
    <div className={outerSectionStyles}>
      <h2 className={headingStyles}>Testimonials</h2>
      <div className="container">
        <section className={innerSectionStyles}>
          {testimonials.map(testimonial => {
            let {name, text} = testimonial
            return (<Testimonial name={name} text={text}/>)
          })
}
        </section>
      </div>
    </div>
  )
}

type Props = {
  data: {
    landingPage: {
      banner: {
        heading: string,
        subheading: string,
        height: string,
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

export default class Index extends React.Component < Props > {
  render() {
    let {
      landingPage: {
        banner,
        about,
        features,
        testimonials
      },
      bannerImage
    } = this.props.data
    return (
      <div>
        <Banner banner={banner} sizes={bannerImage}/>
        <About about={about}/>
        <Features features={features}/>
        <Testimonials testimonials={testimonials}/>
      </div>
    )
  }
}

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
        ...GatsbyImageSharpSizes_withWebp_tracedSVG
      }
    }
  }
  `