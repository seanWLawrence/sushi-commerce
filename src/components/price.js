// @flow
import * as React from 'react'
import bulmaClassnames from '../utils'
import {cx} from 'emotion'

let Price = ({price, extraClassname} : {
  price: number,
  extraClassname: string | {}
}) => {

  let priceStyles = cx(bulmaClassnames({textColor: 'gray', textSize: '4'}), extraClassname = {})

  return (
    <span className={priceStyles}>${price}</span>
  )
}

export default Price