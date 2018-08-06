// @flow
import * as React from 'react';
import bulmaClassnames from '../utils';

type PriceProps = {
  price: number,
  className?: string,
};

let Price = ({ price, className = '' }: PriceProps) => {
  let priceStyles = bulmaClassnames({ textColor: 'gray', textSize: '4' });

  return <span className={`${priceStyles} ${className}`}>${price}</span>;
};

export default Price;
