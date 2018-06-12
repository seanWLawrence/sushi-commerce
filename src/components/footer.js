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
        'link', 'small', 'outlined'
      ],
      raw: 'button has-addons'
    })
    let textStyles = cx(css({textTransform: 'capitalize'}), bulmaClassnames({textWeight: 'semibold'}))

    return (
      <section className="tag">
        <a href={href} title={site} className={buttonStyles}>
          <FontAwesome name={site} style={{
            marginRight: '10px'
          }}/>
          <span className={textStyles}>{site}</span>
        </a>
      </section>
    )
  }
  let sectionStyles = cx(css({marginTop: '20px', width: '100%', display: 'flex', justifyContent: 'center', flexWrap: 'wrap'}), "tags")

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

  let iconStyles = {
    backgroundColor: '#fff'
  }

  return (
    <div className={sectionStyles}>
      <FontAwesome name="cc-visa" size="2x" style={iconStyles}/>
      <FontAwesome name="cc-mastercard" size="2x" style={iconStyles}/>
      <FontAwesome name="cc-amex" size="2x" style={iconStyles}/>
      <FontAwesome name="cc-discover" size="2x" style={iconStyles}/>
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
      height: '280px',
      backgroundColor: '#eee'
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