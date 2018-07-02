// @flow
import * as React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import './index.scss';
import 'font-awesome/scss/font-awesome.scss';

type Props = {
  data: {
    navigation: {
      menuItems: Array<{
        page: string,
        to: string,
      }>,
      paypalCartButtonCode: string,
      hideFooter: boolean,
    },
    siteDetails: {
      title: string,
      socialMedia: Array<{
        site: string,
        href: string,
      }>,
    },
    logo: {
      sizes: {
        aspectRatio: string,
        sizes: string,
        src: string,
        srcSet: string,
        srcSetWebp: string,
        srcSetWebp: string,
        tracedSVG: string,
      },
    },
  },
  children: () => React.Node,
};

export default class Layout extends React.Component<Props> {
  render() {
    let {
      children,
      data: {
        navigation: { menuItems, paypalCartButtonCode, hideFooter },
        siteDetails: { title, socialMedia },
        logo: { sizes },
      },
    } = this.props;

    let sectionStyles = {
      marginTop: '90px',
    };

    return (
      <div style={sectionStyles}>
        <Header
          logo={sizes}
          paypalCartButtonCode={paypalCartButtonCode}
          menuItems={menuItems}
        />{' '}
        {children()}
        <Footer
          hideFooter={hideFooter}
          title={title}
          socialMedia={socialMedia}
        />
      </div>
    );
  }
}

declare function graphql(query: string[]): string;

export const query = graphql`
  query RootQuery {
    navigation: dataYaml(id: { regex: "/navigation/" }) {
      paypalCartButtonCode
      menuItems {
        page
        to
      }
      hideFooter
    }
    siteDetails: dataYaml(id: { regex: "/details/" }) {
      title
      socialMedia {
        site
        href
      }
    }
    logo: imageSharp(id: { regex: "/logo/" }) {
      sizes(quality: 65) {
        ...GatsbyImageSharpSizes_withWebp
      }
    }
  }
`;
