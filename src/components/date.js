// @flow
import * as React from 'react'
import {cx, css} from 'emotion'
import bulmaClassnames from '../utils'

let Date = ({date} : {
  date: string
}) => {
  let textStyles = cx(css({margin: '-10px 0 20px 0', display: 'flex'}), bulmaClassnames({textColor: 'gray', textTransformation: 'italic'}))

  return (
    <p className={textStyles}>
      <span>{date}</span>
    </p>
  )
}

export default Date