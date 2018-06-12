// @flow
import * as React from 'react'
import Link from 'gatsby-link'
import {cx, css} from 'emotion'
import bulmaClassnames from '../utils'

type PageTitleProps = {
  title: string,
  extraClassname?: string | {}
}

let extraClassname = ''

export let PageTitle = ({title, extraClassname} : PageTitleProps) => {
  let textStyles = cx(css({marginTop: '30px', display: 'flex'}), bulmaClassnames({raw: 'title', textAlign: 'left'}), extraClassname)

  return (
    <h1 className={textStyles}>
      {title}
    </h1>
  )
}

type GridTitleProps = {
  title: string,
  to: string,
  extraClassname?: string | {}
}

export let GridTitle = ({title, to, extraClassname} : GridTitleProps) => {
  let textStyles = cx(css({margin: '20px auto'}), bulmaClassnames({raw: 'title', textSize: '3', textAlign: 'left'}), extraClassname)

  return (
    <Link to={to}>
      <h2 className={textStyles}>
        {title}
      </h2>
    </Link>
  )
}
