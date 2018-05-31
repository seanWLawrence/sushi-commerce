// @flow
import React from 'react'
import Link from 'gatsby-link'

type Props = {
  siteTitle?: string
}

export default class Header extends React.Component < Props > {
  header() {
    let {siteTitle} = this.props;
    return (
      <h1>
        <Link to="/">
          {siteTitle}
        </Link>
      </h1>
    )
  }
  render() {
    let {siteTitle} = this.props
    return siteTitle
      ? this.header()
      : null
  }
}