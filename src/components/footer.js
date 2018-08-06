// @flow
import * as React from 'react';
import FontAwesome from 'react-fontawesome';
import bulmaClassnames, { ConditionalRender } from '../utils';

type Props = {
  title: string,
  hideFooter: boolean,
  socialMedia: Array<{
    site: string,
    href: string,
  }>,
};

let date = new Date();
let thisYear = date.getFullYear();

let Copyright = ({ title }) => {
  let textStylesInline = {
    marginBottom: '10px',
  };
  let textStyles = bulmaClassnames({ textAlign: 'centered', textSize: '5' });

  return (
    <p style={textStylesInline} className={textStyles}>
      {'Copyright '}
      &copy; {`${thisYear} ${title}`}
    </p>
  );
};

let SocialMedia = ({ socialMedia }) => {
  let Social = ({ site, href }) => {
    let tagStyles = {
      backgroundColor: 'transparent',
    };

    let buttonStyles = bulmaClassnames({
      is: ['primary', 'small', 'rounded'],
      raw: 'button has-addons',
    });

    let textStylesInline = {
      textTransform: 'capitalize',
    };
    let textStyles = bulmaClassnames({ textWeight: 'semibold' });

    let iconStyles = {
      marginRight: '10px',
    };

    return (
      <section style={tagStyles} className="tag">
        <a href={href} title={site} className={buttonStyles}>
          <FontAwesome name={site} style={iconStyles} />
          <span style={textStylesInline} className={textStyles}>
            {site}
          </span>
        </a>
      </section>
    );
  };

  let sectionStyles = {
    marginTop: '20px',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
  };

  return (
    <div style={sectionStyles}>
      {socialMedia.map((social) => {
        let { site, href } = social;
        return <Social site={site} href={href} key={site} />;
      })}
    </div>
  );
};

let PaymentOptions = () => {
  let sectionStyles = {
    display: 'flex',
    justifyContent: 'space-between',
    width: '200px',
  };

  let iconStyles = {
    backgroundColor: 'transparent',
  };

  return (
    <div style={sectionStyles}>
      <FontAwesome style={iconStyles} name="cc-visa" size="2x" />
      <FontAwesome style={iconStyles} name="cc-mastercard" size="2x" />
      <FontAwesome style={iconStyles} name="cc-amex" size="2x" />
      <FontAwesome style={iconStyles} name="cc-discover" size="2x" />
    </div>
  );
};

export default class Footer extends React.Component<Props> {
  render() {
    let { title, hideFooter, socialMedia } = this.props;
    let sectionStyles = {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '320px',
      backgroundColor: '#eee',
      position: 'relative',
      zIndex: 0,
    };

    return (
      <ConditionalRender prop={!hideFooter}>
        <footer style={sectionStyles}>
          <Copyright title={title} />
          <PaymentOptions />
          <SocialMedia socialMedia={socialMedia} />
        </footer>
      </ConditionalRender>
    );
  }
}
