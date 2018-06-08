// @flow
import * as React from 'react'
import bulmaClassnames from '../utils'

let Price = ({price} : {
  price: number
}) => {
  let priceStyles = bulmaClassnames({textColor: 'gray', textSize: '4'})
  return (
    <span className={priceStyles}>${price}</span>
  )
}

export default Price