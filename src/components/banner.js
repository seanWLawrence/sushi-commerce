// @flow
import React from 'react';
import Img from 'gatsby-image';
import Link, { withPrefix } from 'gatsby-link';
import bulmaClassnames from '../utils';
import type { OverlayColor } from '../types.js';

type Props = {
  banner: {
    backgroundImage: string,
    overlayColor: OverlayColor,
    heading: string,
    subheading: string,
    button: {
      text: string,
      color: string,
      to: string,
    },
  },
};

let Banner = ({ banner }: Props) => {
  let {
    backgroundImage,
    overlayColor,
    heading,
    subheading,
    button: { text, color, to },
  } = banner;

  let backgroundColor = {
    moonPurple:
      'linear-gradient(to right, rgba(78, 84, 200, .7), rgba(143, 148, 251, .7))',
    shifter:
      'linear-gradient(to right, rgba(188, 78, 156, .7), rgba(248, 7, 89, .7))',
    quepal:
      'linear-gradient(to right, rgba(17, 153, 142, .7), rgba(56, 239, 125, .7))',
    pinkFlavour:
      'linear-gradient(to right, rgba(128, 0, 128, .7), rgba(255, 192, 203, .7))',
    orangeFun:
      'linear-gradient(to right, rgba(252, 74, 26, .7), rgba(247, 183, 51, .7))',
    digitalWater:
      'linear-gradient(to right, rgba(116, 235, 213, .8), rgba(172, 182, 229, .8))',
    purpink:
      'linear-gradient(to right, rgba(127, 0, 255, .7), rgba(225, 0, 255, .7))',
    blueSkies:
      'linear-gradient(to right, rgba(86,204,242, .7), rgba(47,128,237.7))',
    nelson:
      'linear-gradient(to right, rgba(242, 112, 156, .8), rgba(255, 148, 114, .8))',
    aqualicious:
      'linear-gradient(to right, rgba(80, 201, 195, .8), rgba(150, 222, 218, .8))',
    kyoto:
      'linear-gradient(to right, rgba(194, 21, 0, .7), rgba(255, 197, 0, .7))',
    mojito:
      'linear-gradient(to right, rgba(29, 151, 108, .8), rgba(147, 249, 185, .8))',
    lush:
      'linear-gradient(to right, rgba(86, 171, 47, .8), rgba(168, 224, 99, .8))',
  };

  let linkedSrc = './'.concat(backgroundImage.slice(8));

  let sectionStyles = {
    marginTop: '-45px',
  };

  let innerSectionStyles = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '90vh',
    width: '100%',
    backgroundSize: 'cover',
    backgroundImage: `${backgroundColor[overlayColor]}, url(${withPrefix(
      linkedSrc,
    )})`,
  };

  let bodyStyles = {
    margin: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  let headingStyles = bulmaClassnames({
    raw: 'title',
    textColor: 'white-ter',
    textSize: ['1-desktop', '2-tablet', '3-mobile'],
    textAlign: 'centered',
  });

  let subheadingStyles = bulmaClassnames({
    raw: 'subtitle',
    textColor: 'white-ter',
    textSize: ['3-desktop', '4-tablet', '4-mobile'],
    textAlign: 'centered',
  });

  let buttonStyles = bulmaClassnames({
    raw: 'button',
    is: [color, 'medium', 'rounded'],
  });

  return (
    <div style={sectionStyles}>
      <div style={innerSectionStyles}>
        <div style={bodyStyles}>
          <h1 className={headingStyles}>{heading}</h1>
          <h2 className={subheadingStyles}>{subheading}</h2>
          <Link className={buttonStyles} to={to}>
            {text}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
