// @flow
import * as React from 'react'
import {cx, css} from 'emotion'
import bulmaClassnames from '../utils'

type Props = {
  title: string,
  extraClassname: string | {}
}

let extraClassname = ''

export let PageTitle = ({title, extraClassname} : Props) => {
  let textStyles = cx(css({marginTop: '30px', display: 'flex'}), bulmaClassnames({raw: 'title', textAlign: 'left'}), extraClassname)

  return (
    <h1 className={textStyles}>
      {title}
    </h1>
  )
}

export let GridTitle = ({title, extraClassname} : Props) => {
  let textStyles = cx(css({margin: '20px auto'}), bulmaClassnames({raw: 'title', textSize: '3', textAlign: 'left'}), extraClassname)

  return (
    <h2 className={textStyles}>
      {title}
    </h2>
  )
}
