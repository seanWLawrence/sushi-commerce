// @flow

import * as React from 'react'
import FontAwesome from 'react-fontawesome'
import {css, cx} from 'emotion'
import {ConditionalRender} from '../utils';
import bulmaClassnames from '../utils'

type Props = {
  paypalBuyNowButtonCode: string,
  paypalAddToCartButtonCode: string,
  coinbaseCommerceButtonCode: string
}

export class CoinbaseCommerceButton extends React.Component < {
  code : string
} > {
  Icon() {
    return (
      <span className="icon">
        <img
          src="http://img.app.kiwi/icon/rq5wUrwR5zZKqRQol3IfwOENAKDH51RHrqLS2Mq8ttsN7Nt8DSaib6M7Ng0ZiwtOsoM=w300"/>
      </span>
    )
  }

  renderButtonWithCode(code : string) {
    let buttonStyles = {
      display: 'flex',
      marginRight: '10px',
      backgroundColor: '#065FBF'
    }
    let textStyles = bulmaClassnames({textColor: 'white', textWeight: 'semibold'})
    let href = `https://commerce.coinbase.com/checkout/${code}`

    return (
      <ConditionalRender prop={code}>
        <a style={buttonStyles} className="buy-with-crypto button" href={href}>
          {this.Icon()}
          <span className={textStyles}>Buy now with crypto</span>
        </a>
      </ConditionalRender>
    )
  }

  render() {
    let {code} = this.props;

    return (
      <div style={{
        display: 'flex'
      }}>
        {this.renderButtonWithCode(code)}
        <script src="https://commerce.coinbase.com/v1/checkout.js"/>
      </div>
    )
  }
}

export class PaypalBuyNowButton extends React.Component < {
  code : string
} > {
  Button() {
    return (
      <button className="button" style={{
        backgroundColor: '#FFC439'
      }}>
        <span className="icon" style={{
          marginRight: '10px'
        }}>
          <FontAwesome name="paypal"/>
        </span>
        <span className="title is-6">Buy now</span>
      </button>
    )
  }

  TrackingPixel() {
    return (<img
      alt=""
      style={{
      border: 0
    }}
      src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif"
      width="1"
      height="1"/>);
  }

  renderButtonWithCode(code : string) {
    return (
      <ConditionalRender prop={code}>
        <form
          style={{
          display: 'flex',
          margin: '0 10px'
        }}
          target="paypal"
          action="https://www.paypal.com/cgi-bin/webscr"
          method="post">
          <input type="hidden" name="cmd" value="_s-xclick"/>
          <input type="hidden" name="hosted_button_id" value={code}/> {this.Button()}
          {this.TrackingPixel()}
        </form>
      </ConditionalRender>
    )
  }

  render() {
    const {code} = this.props;

    return this.renderButtonWithCode(code);
  }
}

export class PaypalAddToCartButton extends React.Component < {
  code : string
} > {
  // button that takes in the PayPal 'add to cart' button value and when clicke,
  // adds the product to the cart

  Button() {
    return (
      <button className="button" style={{
        backgroundColor: '#FFC439'
      }}>
        <span className="icon" style={{
          marginRight: '10px'
        }}>
          <FontAwesome name="paypal"/>
        </span>
        <span className="title is-6">Add to cart</span>
      </button>
    )
  }

  TrackingPixel() {
    return (<img
      alt=""
      style={{
      border: 0
    }}
      src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif"
      width="1"
      height="1"/>)
  }

  renderButtonWithCode(code : string) {
    return (
      <ConditionalRender prop={code}>
        <form
          style={{
          display: 'flex',
          marginRight: '10px'
        }}
          target="paypal"
          action="https://www.paypal.com/cgi-bin/webscr"
          method="post">
          <input type="hidden" name="cmd" value="_s-xclick"/>
          <input type="hidden" name="hosted_button_id" value={code}/> {this.Button()}
          {this.TrackingPixel()}
        </form>
      </ConditionalRender>
    )
  }

  render() {
    let {code} = this.props;

    return this.renderButtonWithCode(code);
  }
}

export class Buttons extends React.Component < Props > {
  render() {
    let {paypalBuyNowButtonCode, paypalAddToCartButtonCode, coinbaseCommerceButtonCode} = this.props;
    let styles = css({
      position: 'fixed',
      bottom: 0,
      left: 'auto',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100vw',
      padding: '20px 0',
      overflowX: 'auto',
      backgroundColor: '#fff',
      maxHeight: '70px',
      '@media (max-width: 500px)': {
        justifyContent: 'flex-start'
      }
    })

    return (
      <div className={styles}>
        <PaypalBuyNowButton code={paypalBuyNowButtonCode}/>
        <PaypalAddToCartButton code={paypalAddToCartButtonCode}/>
        <CoinbaseCommerceButton code={coinbaseCommerceButtonCode}/>
      </div>
    )
  }
}