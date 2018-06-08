// @flow
import * as React from 'react'
import {cx} from 'emotion'

let Html = ({html, extraClassName} : {
  html: string,
  extraClassName?: string | {}
}) => {

  let sectionStyles = cx('content', extraClassName = {})

  return <div
    className={sectionStyles}
    dangerouslySetInnerHTML={{
    __html: html
  }}/>
}

export default Html