// @flow
import * as React from 'react'
import Link from 'gatsby-link'
import {cx, css} from 'emotion'
import FontAwesome from 'react-fontawesome'
import bulmaClassnames, {ConditionalRender} from '../utils'

let Logo = ({sizes}) => {
  return (
    <ConditionalRender prop={sizes}>
      <img
        src={sizes.src}
        alt="site logo"
        style={{
        maxHeight: '50px'
      }}/>
    </ConditionalRender>
  )
}

let NavbarBrand = ({logo, onClick, isActive}) => {
  // Bulma .navbar-brand container for the site logo and title

  let buttonClassName = isActive
    ? 'navbar-burger is-active'
    : 'navbar-burger'

  let logoStyles = css({display: 'flex', alignItems: 'center'})

  let buttonStyles = cx(css({width: '75px', height: '75px', border: 0}), buttonClassName)

  return (
    <section className="navbar-brand">
      <Link className={logoStyles} to="/">
        <Logo sizes={logo}/>
      </Link>
      <button
        onClick={onClick}
        className={buttonStyles}
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

let extraClassName = ''

let PaypalCartButton = ({code, extraClassName}) => {
  let sectionStyles = cx('navbar-item', css({display: 'flex!important', justifyContent: 'flex-start', alignItems: 'center'}), extraClassName)

  let buttonStyles = css({
    backgroundColor: '#fff',
    margin: 0,
    border: 0,
    padding: 0,
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    '@media (max-width: 1080px)': {
      marginTop: '5px'
    }
  })

  let textStyles = bulmaClassnames({textSize: '6', textColor: 'grey-dark', is: 'hidden-desktop'})

  let iconStyles = cx(css({
    marginLeft: '10px',
    cursor: 'pointer',
    '@media (max-width: 1080px)': {
      fontSize: '16px'
    }
  }), 'has-text-grey-dark')

  return (
    <form
      target="paypal"
      action="https://www.paypal.com/cgi-bin/webscr"
      method="post"
      className={`navbar-item ${extraClassName}`}>
      <input type="hidden" name="cmd" value="_s-xclick"/>
      <input type="hidden" name="encrypted" value={code}/>
      <button className={buttonStyles} name="submit">
        <span className={textStyles}>
          View cart
        </span>
        <FontAwesome className={iconStyles} name="shopping-bag" size="2x"/>
      </button>
      <img
        style={{
        border: 0,
        width: 1,
        height: 1
      }}
        src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif"/>
    </form>
  )
}

let NavbarStart = ({menuItems, onClick, paypalCartButtonCode}) => {
  // Bulma .navbar-start container with the navigation links and submenus (on
  // mobile, also adds a PayPal 'view cart' button, since the desktop 'view cart'
  // button is not shown)
  let MenuItems = menuItems.map(item => {
    let {page, to} = item;
    let textStyles = cx('navbar-item', css({marginTop: '4px'}))

    return (
      <Link className={textStyles} key={page} to={to}>
        {page}
      </Link>
    );
  });

  return (
    <section className="navbar-start" onClick={onClick}>
      {MenuItems}
      <PaypalCartButton
        code={paypalCartButtonCode}
        extraClassName="is-hidden-desktop is-hidden-tablet"/>
    </section>
  );
};

let NavbarEnd = ({paypalCartButtonCode}) => {
    let buttonStyles = cx(css({padding: 0, border: 0}), 'is-hidden-mobile')
    return (
      <section className="navbar-end level">
        <section className="navbar-item">
          <PaypalCartButton code={paypalCartButtonCode} extraClassName={buttonStyles}/>
        </section>
      </section>
    )
  }

  type MenuItem = {
    page: string,
    to: string
  }

  type Props = {
    logo: {
      aspectRatio: string,
      sizes: string,
      src: string,
      srcSet: string,
      srcSetWebp: string,
      srcSetWebp: string,
      tracedSVG: string
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