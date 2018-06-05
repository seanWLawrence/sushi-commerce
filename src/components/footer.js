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
  let textStyles = bulmaClassnames({textAlign: 'centered', textSize: '5'})
  return (
    <p className={textStyles}>
      {`${title} - Copyright`}
      &copy; {thisYear}</p>
  )
}

let SocialMedia = ({socialMedia}) => {
  let Social = ({site, href}) => {
    let buttonStyles = bulmaClassnames({
      is: [
        'info', 'small'
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

export default class Footer extends React.Component < Props > {

  render() {
    let {title, hideFooter, socialMedia} = this.props
    let sectionStyles = cx(css({
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '200px',
      backgroundColor: '#f9f9f9'
    }))
    return (
      <ConditionalRender prop={!hideFooter}>
        <footer className={sectionStyles}>
          <Copyright title={title}/>
          <SocialMedia socialMedia={socialMedia}/>
        </footer>
      </ConditionalRender>
    )
  }
}
