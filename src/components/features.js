// @flow
import * as React from 'react'
import {cx, css} from 'emotion'
import FontAwesome from 'react-fontawesome'
import bulmaClassnames from '../utils'

export class ProductFeatures extends React.Component < {
  features : string[]
} > {

  displayFeatures(features : string[]) {
    return features.map(feature => {
      return (
        <li key={feature} className="menu-item">{feature}</li>
      )
    })
  }

  render() {
    let {features} = this.props

    let sectionStyles = cx(css({marginTop: '20px'}), 'menu')

    let titleStyles = bulmaClassnames({raw: 'title', textSize: '5', textColor: 'grey-dark'})

    return (
      <aside className={sectionStyles}>
        <hr/>
        <h2 className={titleStyles}>Features</h2>
        <ul className="menu-list">
          {this.displayFeatures(features)}
        </ul>
        <hr/>
      </aside>
    )
  }
}

type Feature = {
  heading: string,
  icon: string,
  text: string

}

type Props = {
  features: Array < Feature >
}

export class LandingFeatures extends React.Component < Props > {

  displayFeatures(features : Array < Feature >) {
    return features.map(feature => {

      let {heading, text, icon} = feature

      let featureStyles = bulmaClassnames({
        column: ['12-mobile', '3-tablet', '3-desktop']
      })

      let headingStyles = bulmaClassnames({raw: 'title', textSize: '4', textAlign: 'centered'})

      let iconStyles = cx(css({margin: '5px auto', width: '100%'}), bulmaClassnames({textAlign: 'centered'}))

      let textStyles = bulmaClassnames({raw: 'subtitle', textAlign: 'centered'})

      return (
        <div className={featureStyles} key={heading}>
          <FontAwesome name={icon} size="2x" className={iconStyles}/>
          <h3 className={headingStyles}>{heading}</h3>
          <p className={textStyles}>{text}</p>
        </div>
      )
    })
  }

  render() {
    let {features} = this.props

    let sectionStyles = cx(css({backgroundColor: '#eee'}), bulmaClassnames({raw: 'hero', is: ['small'], textColor: 'primary'}))

    let innerSectionStyles = cx(css({maxWidth: '100%'}), 'hero-body columns is-centered')

    return (
      <div className={sectionStyles}>
        <div className={innerSectionStyles}>
          {this.displayFeatures(features)}
        </div>
      </div>
    )
  }
}