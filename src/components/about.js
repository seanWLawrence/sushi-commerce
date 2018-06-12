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

  let sectionStyles = cx('hero is-medium', css({backgroundColor: '#eee', margin: '0'}), bulmaClassnames({column: '12'}))

  let innerSectionStyles = cx(css({margin: 'auto'}), bulmaClassnames({
    column: ['6-desktop', '10-tablet', '11-mobile']
  }))

  let textStyles = bulmaClassnames({
    textSize: [
      '4-desktop', '4-tablet', '5-mobile'
    ],
    textAlign: 'centered'
  })

  return (
    <section className={sectionStyles}>
      <section className="hero-body">
        <div className={innerSectionStyles}>
          <Title heading={heading}/>
          <p className={textStyles}>{text}</p>
        </div>
      </section>
    </section>
  )
}

export default About