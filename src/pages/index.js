// @flow
import React from 'react';
import bulmaClassnames from '../utils';
import Banner from '../components/banner';
import About from '../components/about';
import { LandingFeatures } from '../components/features';
import Testimonials from '../components/testimonials';
import { OverlayColor } from '../types';

type Props = {
  data: {
    landingPage: {
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
      about: {
        heading: string,
        text: string,
      },
      features: Array<{
        heading: string,
        icon: string,
        text: string,
      }>,
      testimonials: Array<{
        name: string,
        text: string,
      }>,
    },
  },
};

let Index = ({ data }: Props) => {
  let {
    landingPage: { banner, about, features, testimonials },
  } = data;

  return (
    <div>
      <Banner banner={banner} />
      <About about={about} />
      <LandingFeatures features={features} />
      <Testimonials testimonials={testimonials} />
    </div>
  );
};

export default Index;

declare function graphql(query: string[]): string;

export let query = graphql`
  query IndexQuery {
    landingPage: dataYaml(id: { regex: "/landing-page/" }) {
      banner {
        backgroundImage
        overlayColor
        heading
        subheading
        button {
          text
          color
          to
        }
      }
      about {
        heading
        text
      }
      features {
        heading
        text
        icon
      }
      testimonials {
        name
        text
      }
    }
  }
`;
