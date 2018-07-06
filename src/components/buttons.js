// @flow

import * as React from 'react';
import bulmaClassnames, {
  ConditionalRender,
  stripHtmlFromPaypalCode,
} from '../utils';
import FontAwesome from 'react-fontawesome';
import Link from 'gatsby-link';

type Props = {
  paypalBuyNowButtonCode: string,
  paypalAddToCartButtonCode: string,
  coinbaseCommerceButtonCode: string,
};

export class CoinbaseCommerceButton extends React.Component<{
  link: string,
}> {
  Icon() {
    return (
      <span className="icon">
        <img src="http://img.app.kiwi/icon/rq5wUrwR5zZKqRQol3IfwOENAKDH51RHrqLS2Mq8ttsN7Nt8DSaib6M7Ng0ZiwtOsoM=w300" />
      </span>
    );
  }

  renderButtonWithCode(link: string) {
    let buttonStyles = {
      display: 'flex',
      marginRight: '10px',
      backgroundColor: '#065FBF',
    };

    let textStyles = bulmaClassnames({
      textColor: 'white',
      textWeight: 'semibold',
    });

    return (
      <ConditionalRender prop={link}>
        <a style={buttonStyles} className="buy-with-crypto button" href={link}>
          {this.Icon()}
          <span className={textStyles}>Buy now with crypto</span>
        </a>
      </ConditionalRender>
    );
  }

  render() {
    let { link } = this.props;
    let sectionStyles = {
      display: 'flex',
    };

    return (
      <div style={sectionStyles}>
        {this.renderButtonWithCode(link)}
        <script src="https://commerce.coinbase.com/v1/checkout.js" />
      </div>
    );
  }
}

export class PaypalBuyNowButton extends React.Component<{
  code: string,
}> {
  Button() {
    let buttonStyles = {
      backgroundColor: '#FFC439',
    };

    let iconStyles = {
      marginRight: '10px',
    };

    return (
      <button className="button" style={buttonStyles}>
        <span className="icon" style={iconStyles}>
          <FontAwesome name="paypal" />
        </span>
        <span className="title is-6">Buy now</span>
      </button>
    );
  }

  TrackingPixel() {
    let pixelStyles = {
      border: 0,
    };

    return (
      <img
        alt=""
        style={pixelStyles}
        src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif"
        width="1"
        height="1"
      />
    );
  }

  renderButtonWithCode(code: string) {
    // strips away code from the html
    code = stripHtmlFromPaypalCode(code);

    let formStyles = {
      display: 'flex',
      margin: '0 10px',
    };

    return (
      <ConditionalRender prop={code}>
        <form
          style={formStyles}
          target="paypal"
          action="https://www.paypal.com/cgi-bin/webscr"
          method="post"
        >
          <input type="hidden" name="cmd" value="_s-xclick" />
          <input type="hidden" name="hosted_button_id" value={code} />{' '}
          {this.Button()}
          {this.TrackingPixel()}
        </form>
      </ConditionalRender>
    );
  }

  render() {
    const { code } = this.props;

    return this.renderButtonWithCode(code);
  }
}

export class PaypalAddToCartButton extends React.Component<{
  code: string,
}> {
  // button that takes in the PayPal 'add to cart' button value and when clicke,
  // adds the product to the cart

  Button() {
    return (
      <button
        className="button"
        style={{
          backgroundColor: '#FFC439',
        }}
      >
        <span
          className="icon"
          style={{
            marginRight: '10px',
          }}
        >
          <FontAwesome name="paypal" />
        </span>
        <span className="title is-6">Add to cart</span>
      </button>
    );
  }

  TrackingPixel() {
    return (
      <img
        alt=""
        style={{
          border: 0,
        }}
        src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif"
        width="1"
        height="1"
      />
    );
  }

  renderButtonWithCode(code: string) {
    // strips away html from paypal code
    code = stripHtmlFromPaypalCode(code);

    return (
      <ConditionalRender prop={code}>
        <form
          style={{
            display: 'flex',
            marginRight: '10px',
          }}
          target="paypal"
          action="https://www.paypal.com/cgi-bin/webscr"
          method="post"
        >
          <input type="hidden" name="cmd" value="_s-xclick" />
          <input type="hidden" name="hosted_button_id" value={code} />{' '}
          {this.Button()}
          {this.TrackingPixel()}
        </form>
      </ConditionalRender>
    );
  }

  render() {
    let { code } = this.props;

    return this.renderButtonWithCode(code);
  }
}

export class BuyButtons extends React.Component<Props> {
  render() {
    let {
      paypalBuyNowButtonCode,
      paypalAddToCartButtonCode,
      coinbaseCommerceButtonCode,
    } = this.props;

    let sectionStyles = {
      position: 'fixed',
      bottom: 0,
      left: 'auto',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100vw',
      padding: '20px 0',
      overflowX: 'scroll',
      backgroundColor: '#fff',
      zIndex: 10,
    };

    return (
      <div style={sectionStyles} className="buy-buttons">
        <PaypalBuyNowButton code={paypalBuyNowButtonCode} />
        <PaypalAddToCartButton code={paypalAddToCartButtonCode} />
        <CoinbaseCommerceButton link={coinbaseCommerceButtonCode} />
      </div>
    );
  }
}

export let BackButton = ({ text }: { text: string }) => (
  <Link
    to="/posts"
    title="posts"
    className="button"
    style={{
      marginBottom: '30px',
    }}
  >
    <FontAwesome
      name="arrow-left"
      style={{
        marginRight: '10px',
      }}
    />{' '}
    {text}
  </Link>
);
