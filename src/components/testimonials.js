// @flow
import React from 'react'
import {cx, css} from 'emotion'
import Img from 'gatsby-image'
import bulmaClassnames from '../utils'

type TestimonialType = {
  name: string,
  text: string
}

type Props = {
  testimonials: TestimonialType[]
}

let Testimonial = ({name, text} : TestimonialType) => {

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

export default class Testimonials extends React.Component < Props > {

  displayTestimonials(testimonials : TestimonialType[]) {
    testimonials.map(testimonial => {
      let {name, text} = testimonial
      return <Testimonial name={name} text={text} key={name}/>
    })
  }

  render() {
    let {testimonials} = this.props

    let outerSectionStyles = css({margin: '100px'})

    let innerSectionStyles = cx('columns is-centered', css({margin: '50px auto'}))

    let headingStyles = cx(bulmaClassnames({raw: 'title', textSize: '2', textAlign: 'centered'}), css({marginTop: '40px'}));

    return (
      <div className={outerSectionStyles}>
        <h2 className={headingStyles}>Testimonials</h2>
        <div className="container">
          <section className={innerSectionStyles}>
            {this.displayTestimonials(testimonials)}
          </section>
        </div>
      </div>
    )
  }
}
