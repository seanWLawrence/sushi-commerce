// @flow
import type { ThemeProps } from '../types'
import * as React from 'react'
import Link from 'gatsby-link'
import bulmaClassnames from '../utils'

export default class Theme extends React.Component<ThemeProps> {
  static defaultProps = {
    styles: {
      textColor: 'gray-dark',
      textColorCustom: '',
      fontWeight: 'normal',
      fontSize: 'normal',
      textTransformation: 'none',
      textAlign: 'left',
      raw: '',
    },
  }

  static H1 = ({ children, styles }: ThemeProps) => (
    <h1 className={bulmaClassnames(styles)}>{children}</h1>
  )

  static H2 = ({ children, styles }: ThemeProps) => (
    <h2 className={bulmaClassnames(styles)}>{children}</h2>
  )

  static H3 = ({ children, styles }: ThemeProps) => (
    <h3 className={bulmaClassnames(styles)}>{children}</h3>
  )

  static H4 = ({ children, styles }: ThemeProps) => (
    <h4 className={bulmaClassnames(styles)}>{children}</h4>
  )

  static H5 = ({ children, styles }: ThemeProps) => (
    <h5 className={bulmaClassnames(styles)}>{children}</h5>
  )

  static H6 = ({ children, styles }: ThemeProps) => (
    <h6 className={bulmaClassnames(styles)}>{children}</h6>
  )

  static Span = ({ children, styles }: ThemeProps) => (
    <span className={bulmaClassnames(styles)}>{children}</span>
  )

  static P = ({ children, styles }: ThemeProps) => (
    <p className={bulmaClassnames(styles)}>{children}</p>
  )

  static Link = ({ href, children, styles }: ThemeProps) => (
    <Link to={href}>{children}</Link>
  )

  static LinkExternal = ({ href, children, styles }: ThemeProps) => (
    <a href={href}>{children}</a>
  )

  static LinkExternalNewTab = ({ href, children, styles }: ThemeProps) => (
    <a href={href} target="_blank" rel="noopenner noreferrer nofollow">
      {children}
    </a>
  )

  static Iframe = ({ href, children, styles }: ThemeProps) => (
    <a href={href} target="_blank" rel="noopenner noreferrer nofollow">
      {children}
    </a>
  )

  static Image = ({ src, children, styles }: ThemeProps) => (
    <a src={src} target="_blank" rel="noopenner noreferrer nofollow">
      {children}
    </a>
  )

  static Blockquote = ({ children, styles }: ThemeProps) => (
    <p className={bulmaClassnames(styles)}>{children}</p>
  )

  static Div = ({ children, styles }: ThemeProps) => (
    <p className={bulmaClassnames(styles)}>{children}</p>
  )

  static Section = ({ children, styles }: ThemeProps) => (
    <p className={bulmaClassnames(styles)}>{children}</p>
  )

  render() {
    return this.props.children
  }
}
