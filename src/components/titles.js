// @flow
import * as React from 'react'
import {cx, css} from 'emotion'
import bulmaClassnames from '../utils'

type Props = {
  title: string
}

export let PageTitle = ({title} : Props) => {
  let textStyles = cx(css({marginTop: '30px', display: 'flex'}), bulmaClassnames({raw: 'title', textAlign: 'left'}))

  return (
    <h1 className={textStyles}>
      {title}
    </h1>
  )
}

export let GridTitle = ({title} : Props) => {
  let textStyles = cx(css({margin: '20px auto'}), bulmaClassnames({raw: 'title', textSize: '3', textAlign: 'left'}))

  return (
    <h2 className={textStyles}>
      {title}
    </h2>
  )
}
