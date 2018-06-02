// @flow
import * as React from 'react'
import Link from 'gatsby-link'
import {cx, css} from 'emotion'
import {ConditionalRender} from '../utils'

let Logo = ({src}) => {
  return (
    <ConditionalRender prop={src}>
      <img src={src.src} alt="site logo" style={{
        maxHeight: '60px'
      }}/>
    </ConditionalRender>
  )
}

let NavbarBrand = ({logo, onClick, isActive}) => {
  // Bulma .navbar-brand container for the site logo and title

  let buttonClassName = isActive
    ? 'navbar-burger button is-active'
    : 'navbar-burger button'

  return (
    <section className="navbar-brand">
      <Link className="navbar-item" to="/">
        <Logo src={logo}/>
      </Link>
      <button
        onClick={onClick}
        className={buttonClassName}
        style={{
        border: 0,
        backgroundColor: '#fff'
      }}>
        <span/>
        <span/>
        <span/>
      </button>
    </section>
  );
};

let PaypalCartButton = ({code, extraClassName}) => (
  <form
    target="paypal"
    action="https://www.paypal.com/cgi-bin/webscr"
    method="post"
    className={`navbar-item ${extraClassName}`}>
    <input type="hidden" name="cmd" value="_s-xclick"/>
    <input type="hidden" name="encrypted" value={code}/>
    <button
      className="button is-medium is-hidden-mobile"
      style={{
      margin: '0 auto',
      border: 0
    }}
      name="submit">
      <span className="icon is-small">
        <i className="fa fa-shopping-bag"/>
      </span>
    </button>
    <span className="is-hidden-desktop">
      View cart
    </span>
    <img
      style={{
      border: 0,
      width: 1,
      height: 1
    }}
      src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif"/>
  </form>
);

let NavbarStart = ({menuItems, onClick, paypalCartButtonCode}) => {
  // Bulma .navbar-start container with the navigation links and submenus (on
  // mobile, also adds a PayPal 'view cart' button, since the desktop 'view cart'
  // button is not shown)
  let MenuItems = menuItems.map(item => {
    let {page, to} = item;

    return (
      <Link className="navbar-item" key={page} to={to}>
        {page}
      </Link>
    );
  });

  return (
    <section className="navbar-start" onClick={onClick}>
      {MenuItems}
      <PaypalCartButton
        code={paypalCartButtonCode}
        extraClassName="is-hidden-desktop"/>
    </section>
  );
};

let NavbarEnd = ({paypalCartButtonCode}) => (
  <section className="navbar-end level">
    <section className="navbar-item">
      <PaypalCartButton
        code={paypalCartButtonCode}
        extraClassName="is-hidden-mobile"/>
    </section>
  </section>
);

type MenuItem = {
  page: string,
  to: string
}

type Props = {
  logo: {
    sizes: {
      aspectRatio: string,
      sizes: string,
      src: string,
      srcSet: string,
      srcSetWebp: string,
      srcSetWebp: string,
      tracedSVG: string
    }
  },
  menuItems: Array < MenuItem >,
  paypalCartButtonCode: string
}

type State = {
  isActive: boolean
}
export default class Header extends React.Component < Props,
State > {
  // top navigation component

  state = {
    isActive: false, // on mobile, if navigation menu is open or closed
  };

  _handleBurgerMenuClick = () => {
    // on mobile, this toggles the navigation menu open/closed when the hamburger
    // icon is clicked

    let {isActive} = this.state;
    return this.setState({
      isActive: !isActive
    });
  };

  _handleLinkClick = () => {
    // on mobile, this closes the navigation menu when a link is clicked
    return this.setState({isActive: false});
  };

  render() {
    let {logo, menuItems, paypalCartButtonCode} = this.props;
    let {isActive} = this.state;
    let navbarClassName = isActive
      ? 'navbar-menu is-active'
      : 'navbar-menu'

    return (
      <nav
        className="navbar is-transparent is-fixed-top container-fluid"
        role="navigation"
        aria-label="main navigation"
        style={{
        boxShadow: '0 -4px 9px #999',
        width: '100vw'
      }}>
        <section className="container is-fluid">
          <NavbarBrand
            logo={logo}
            onClick={this._handleBurgerMenuClick}
            isActive={isActive}/>
          <section className={navbarClassName}>
            <NavbarStart
              menuItems={menuItems}
              onClick={this._handleLinkClick}
              paypalCartButtonCode={paypalCartButtonCode}/>
            <NavbarEnd isActive={isActive} paypalCartButtonCode={paypalCartButtonCode}/>
          </section>
        </section>
      </nav>
    );
  }
}