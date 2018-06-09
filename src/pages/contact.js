// @flow
import React from 'react'
import {cx, css} from 'emotion'
import bulmaClassnames from '../utils'
import {PageTitle} from '../components/titles'
import ContactForm from '../components/contact-form'

let Contact = () => {

  let outerSectionStyles = css({display: 'flex', flexDirection: 'column', alignItems: 'center'})

  let innerSectionStyles = cx(css({margin: 'auto', minHeight: '60vh'}), bulmaClassnames({
    column: ['4-desktop', '6-tablet', '11-mobile']
  }))
  let textStyles = bulmaClassnames({raw: 'title', textSize: '2'})

  return (
    <div className={outerSectionStyles}>
      <h1 className={textStyles}>Contact us</h1>
      <div className={innerSectionStyles}>
        <ContactForm/>
      </div>
    </div>
  )
}

export default Contact