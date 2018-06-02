// @flow
import * as React from 'react'
import Header from '../components/header'
import './index.scss'
import 'font-awesome/scss/font-awesome.scss'

type Props = {
  data: {
    navigation: {
      menuItems: Array < {
        page: string,
        to: string
      } >,
      paypalCartButtonCode: string
    },
    logo: {
      sizes: {
        aspectRatio: string,
        sizes: string,
        src: string,
        srcSet: string,
        srcSetWebp: string,
        srcSetWebp: string,
        tracedSVG: string
      }
    }
  },
  children: () => React.Node
}

export default class Layout extends React.Component < Props > {
  render() {
    let {
      children,
      data: {
        navigation: {
          menuItems,
          paypalCartButtonCode
        },
        logo: {
          sizes
        }
      }
    } = this.props
    return (
      <div style={{
        marginTop: '120px'
      }}>
        {/* $FlowFixMe */}
        <Header
          logo={sizes}
          paypalCartButtonCode={paypalCartButtonCode}
          menuItems={menuItems}/> {children()}
      </div>
    )
  }
}

// $FlowFixMe
export const query = graphql `
  query RootQuery {
    navigation: dataYaml(id: { regex: "/navigation/"}) {
      paypalCartButtonCode 
      menuItems {
        page
        to
      }
    }
    logo: imageSharp(id: {regex: "/logo/"}) {
        sizes(quality : 65) {
        ...GatsbyImageSharpSizes_withWebp_tracedSVG
      }
    }
  }
`