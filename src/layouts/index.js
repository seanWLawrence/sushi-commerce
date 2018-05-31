// @flow
import * as React from 'react'
import Header from '../components/header'
import './index.scss'
import 'font-awesome/scss/font-awesome.scss'

type Props = {
  children: () => React.Node
}

export default class Layout extends React.Component < Props > {
  render() {
    let {children} = this.props
    return (
      <div><Header siteTitle="Sushi Yum Yum"/> {children()}</div>
    )
  }
}
