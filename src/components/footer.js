// @flow
import * as React from 'react'
import {cx, css} from 'emotion'
import FontAwesome from 'react-fontawesome'
import bulmaClassnames, {ConditionalRender} from '../utils'

type Props = {
  title: string,
  hideFooter: boolean,
  socialMedia: Array < {
    site: string,
    href: string
  } >
}

let date = new Date()
let thisYear = date.getFullYear()

let Copyright = ({title}) => {
  let textStyles = cx(css({marginBottom: '10px'}), bulmaClassnames({textAlign: 'centered', textSize: '5'}))

  return (
    <p className={textStyles}>
      {`Copyright `}
      &copy; {`${thisYear} ${title}`}</p>
  )
}

let SocialMedia = ({socialMedia}) => {
  let Social = ({site, href}) => {
    let buttonStyles = bulmaClassnames({
      is: [
        'primary', 'small'
      ],
      raw: 'button has-addons'
    })
    let textStyles = cx(css({textTransform: 'capitalize'}), bulmaClassnames({textWeight: 'semibold'}))

    let iconStyles = css({marginRight: '10px'})

    return (
      <section className="tag">
        <a href={href} title={site} className={buttonStyles}>
          <FontAwesome name={site} className={iconStyles}/>
          <span className={textStyles}>{site}</span>
        </a>
      </section>
    )
  }
  let sectionStyles = cx(css({marginTop: '20px', width: '100%', display: 'flex', justifyContent: 'center', flexWrap: 'wrap'}))

  return (
    <div className={sectionStyles}>
      {socialMedia.map(social => {
        let {site, href} = social
        return (<Social site={site} href={href} key={site}/>)
      })}
    </div>
  )
}

let PaymentOptions = () => {
  let sectionStyles = css({display: 'flex', justifyContent: 'space-between', width: '200px'})

  let iconStyles = css({backgroundColor: 'transparent'})

  return (
    <div className={sectionStyles}>
      <FontAwesome className={iconStyles} name="cc-visa" size="2x"/>
      <FontAwesome className={iconStyles} name="cc-mastercard" size="2x"/>
      <FontAwesome className={iconStyles} name="cc-amex" size="2x"/>
      <FontAwesome className={iconStyles} name="cc-discover" size="2x"/>
    </div>
  )
}

export default class Footer extends React.Component < Props > {

  render() {
    let {title, hideFooter, socialMedia} = this.props
    let sectionStyles = cx(css({
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '300px',
      backgroundColor: '#eee',
      position: 'relative',
      zIndex: -10
    }))
    return (
      <ConditionalRender prop={!hideFooter}>
        <footer className={sectionStyles}>
          <Copyright title={title}/>
          <PaymentOptions/>
          <SocialMedia socialMedia={socialMedia}/>
        </footer>
      </ConditionalRender>
    )
  }
}