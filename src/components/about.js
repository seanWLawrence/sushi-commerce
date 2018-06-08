// @flow
import React from 'react'
import {cx, css} from 'emotion'
import bulmaClassnames from '../utils'

type Props = {
  about: {
    heading: string,
    text: string
  }
}

let About = ({about} : Props) => {
  let {heading, text} = about;

  let titleStyles = bulmaClassnames({raw: 'title', textSize: '2', textAlign: 'centered'})

  let Title = ({heading}) => (
    <h2 className={titleStyles}>
      {heading}
    </h2>
  )

  let sectionStyles = cx('hero is-medium', css({padding: '50px auto', margin: '0 auto'}), bulmaClassnames({
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

export default About