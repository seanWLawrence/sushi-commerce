// @flow
import * as React from 'react';
import FontAwesome from 'react-fontawesome';
import bulmaClassnames, { ConditionalRender } from '../utils';

export class ProductFeatures extends React.Component<{
  features: string,
}> {
  displayFeatures(features: string) {
    let featuresArray = [];

    // if multiple features, map over them and put them each in a <li> element
    if (features.indexOf('.')) {
      // split them by the commas
      featuresArray = features.split('.');

      // map over them
      return featuresArray.map((feature) => {
        return (
          <li key={feature} className="menu-item">
            {feature.trim()}
          </li>
        );
      });
    }

    // else if only a single feature, return single feature in a <li> element
    return <li className="menu-item">{features}</li>;
  }

  render() {
    let { features } = this.props;

    let sectionStyles = {
      marginTop: '20px',
    };

    let titleStyles = bulmaClassnames({
      raw: 'title',
      textSize: '5',
      textColor: 'grey-dark',
    });

    return (
      <aside style={sectionStyles} className="menu">
        <hr />
        <h2 className={titleStyles}>Features</h2>
        <ul className="menu-list">{this.displayFeatures(features)}</ul>
        <hr />
      </aside>
    );
  }
}

type Feature = {
  heading: string,
  icon: string,
  text: string,
};

type Props = {
  features: Array<Feature>,
};

export class LandingFeatures extends React.Component<Props> {
  displayFeatures(features: Array<Feature>) {
    return features.map((feature) => {
      let { heading, text, icon } = feature;

      let featureStyles = bulmaClassnames({
        column: ['12-mobile', '3-tablet', '3-desktop'],
      });

      let headingStyles = bulmaClassnames({
        raw: 'title',
        textSize: '4',
        textAlign: 'centered',
      });

      let iconStylesInline = {
        margin: '5px auto',
        width: '100%',
      };

      let iconStyles = bulmaClassnames({ textAlign: 'centered' });

      let textStyles = bulmaClassnames({
        raw: 'subtitle',
        textAlign: 'centered',
      });

      return (
        <div className={featureStyles} key={heading}>
          <FontAwesome
            name={icon}
            size="2x"
            style={iconStylesInline}
            className={iconStyles}
          />
          <h3 className={headingStyles}>{heading}</h3>
          <p className={textStyles}>{text}</p>
        </div>
      );
    });
  }

  render() {
    let { features } = this.props;

    let sectionStylesInline = {
      backgroundColor: '#eee',
    };

    let sectionStyles = bulmaClassnames({
      raw: 'hero',
      is: 'small',
      textColor: 'primary',
    });

    let innerSectionStyles = {
      maxWidth: '100%',
    };

    return (
      <div style={sectionStylesInline} className={sectionStyles}>
        <div
          style={innerSectionStyles}
          className="hero-body columns is-centered"
        >
          {this.displayFeatures(features)}
        </div>
      </div>
    );
  }
}
