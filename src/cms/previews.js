import React from 'react';
import Post from '../templates/post';
import Product from '../templates/product';
import Page from '../templates/page';
import Index from '../pages/index';

export let PostPreview = ({ entry, widgetFor, getAsset }) => {
  // get image.src from assets
  let src = getAsset(entry.getIn(['data', 'featuredImage', 'src'])).value;
  let body = widgetFor('body');

  // create data object with cms helpers to pass to <Post />
  let data = {
    markdownRemark: {
      frontmatter: {
        title: entry.getIn(['data', 'title']),
        date: entry.getIn(['data', 'date']),
        featuredImage: {
          alt: entry.getIn(['data', 'alt']),
        },
        tags: entry.getIn(['data', 'tags']),
      },
      html: '',
    },
    featuredImage: {
      sizes: null,
    },
  };

  // render <Post />
  return <Post data={data} src={src} body={body} />;
};

export let ProductPreview = ({ entry, widgetFor, getAsset }) => {
  // get image.src from assets
  let src = getAsset(entry.getIn(['data', 'featuredImage', 'src'])).value;
  let body = widgetFor('body');

  // create data object with cms helpers to pass to <Product />
  let data = {
    markdownRemark: {
      frontmatter: {
        title: entry.getIn(['data', 'title']),
        price: entry.getIn(['data', 'price']),
        features: entry.getIn(['data', 'features']),
        paypalAddToCartButtonCode: entry.getIn([
          'data',
          'paypalAddToCartButtonCode',
        ]),
        paypalBuyNowButtonCode: entry.getIn(['data', 'paypalBuyNowButtonCode']),
        coinbaseCommerceButtonCode: entry.getIn([
          'data',
          'coinbaseCommerceButtonCode',
        ]),
        featuredImage: {
          alt: entry.getIn(['data', 'alt']),
        },
        tags: entry.getIn(['data', 'tags']),
      },
    },
    featuredImage: {
      sizes: null,
    },
  };

  // render <Product />
  return <Product data={data} src={src} body={body} />;
};

export let PagePreview = ({ entry, widgetFor, getAsset }) => {
  let body = widgetFor('body');

  // create data object with cms helpers to pass to <Page />
  let data = {
    markdownRemark: {
      fields: {
        slug: '',
      },
      frontmatter: {
        title: entry.getIn(['data', 'title']),
        tags: entry.getIn(['data', 'tags']),
        date: '',
      },
      html: '',
    },
  };

  // render <Page />
  return <Page data={data} body={body} />;
};

export let LandingPagePreview = ({ entry, widgetsFor, getAsset }) => {
  // create data object with cms helpers to pass to <Index />
  let data = {
    landingPage: {
      banner: {
        backgroundImage: getAsset(
          entry.getIn(['data', 'banner', 'backgroundImage'])
        ).value,
        overlayColor: entry.getIn(['data', 'banner', 'overlayColor']),
        heading: entry.getIn(['data', 'banner', 'heading']),
        subheading: entry.getIn(['data', 'banner', 'subheading']),
        button: {
          text: entry.getIn(['data', 'banner', 'button', 'text']),
          color: entry.getIn(['data', 'banner', 'button', 'color']),
          to: entry.getIn(['data', 'banner', 'button', 'to']),
        },
      },
      about: {
        heading: entry.getIn(['data', 'about', 'heading']),
        text: entry.getIn(['data', 'about', 'text']),
      },
      features: widgetsFor('features').map(feature => {
        return {
          heading: feature.getIn(['data', 'heading']),
          text: feature.getIn(['data', 'text']),
          icon: feature.getIn(['data', 'icon']),
        };
      }),
      testimonials: widgetsFor('testimonials').map(testimonial => {
        return {
          name: testimonial.getIn(['data', 'name']),
          text: testimonial.getIn(['data', 'text']),
        };
      }),
    },
  };

  // render <Index />
  return <Index data={data} />;
};
