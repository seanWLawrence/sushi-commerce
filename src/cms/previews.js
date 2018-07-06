// @flow
import React from 'react';
import Post from '../templates/post';
import Product from '../templates/product';
import Page from '../templates/page';
import Index from '../pages/index';
import DataTable from './data-table';
import { firstLetterToUppercase } from '../utils';

type Entry = (string[]) => string;
type WidgetFor = string => string;
type GetAsset = string => { value: string };
type WidgetsFor = (*) => *[];

type PostPreviewProps = {
  entry: Entry,
  widgetFor: WidgetFor,
  getAsset: GetAsset,
};

export let PostPreview = ({ entry, widgetFor, getAsset }: PostPreviewProps) => {
  // pull data with entry to display in preview of Netlify CMS
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
      html: widgetFor('body'),
    },
    featuredImageSizes: undefined,
    featuredImageSrc: getAsset(entry.getIn(['data', 'featuredImage', 'src']))
      .value,
    isPreview: true,
  };

  // render <Post /> in preview
  return <Post data={data} />;
};

type ProductPreviewProps = {
  entry: Entry,
  widgetFor: WidgetFor,
  getAsset: GetAsset,
};

export let ProductPreview = ({
  entry,
  widgetFor,
  getAsset,
}: ProductPreviewProps) => {
  // pull data with entry to display in preview of Netlify CMS
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
        coinbaseCommerceButtonLink: entry.getIn([
          'data',
          'coinbaseCommerceButtonLink',
        ]),
        featuredImage: {
          alt: entry.getIn(['data', 'alt']),
        },
        tags: entry.getIn(['data', 'tags']),
      },
      html: widgetFor('body'),
    },
    featuredImageSizes: undefined,
    featuredImageSrc: getAsset(entry.getIn(['data', 'featuredImage', 'src']))
      .value,
    isPreview: true,
  };

  // render <Product /> in preview
  return <Product data={data} />;
};

type PagePreviewProps = {
  entry: Entry,
  widgetFor: WidgetFor,
  getAsset: GetAsset,
};

export let PagePreview = ({ entry, widgetFor, getAsset }: PagePreviewProps) => {
  // pull data with entry to display in preview of Netlify CMS
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
      html: widgetFor('body'),
    },
    isPreview: true,
  };

  // render <Page /> in preview
  return <Page data={data} />;
};

type LandingPagePreviewProps = {
  entry: Entry,
  widgetsFor: WidgetsFor,
  getAsset: GetAsset,
};

export let LandingPagePreview = ({
  entry,
  widgetsFor,
  getAsset,
}: LandingPagePreviewProps) => {
  // pull data with entry to display in preview of Netlify CMS
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

  // render <Index /> in preview
  return <Index data={data} />;
};

type NavigationPreviewProps = {
  entry: Entry,
  widgetsFor: WidgetsFor,
};

export let NavigationPreview = ({
  entry,
  widgetsFor,
}: NavigationPreviewProps) => {
  // get pages from the menuItems list
  let menuItems = widgetsFor('menuItems').map(menuItem => {
    let page = menuItem.getIn(['data', 'page']);

    // capitalize the first letter of each page
    return firstLetterToUppercase(page);
  });

  // pull data from entry to display in preview of Netlify CMS
  let data = [
    {
      heading: 'Menu items',
      text: menuItems.join(', '),
    },
    {
      heading: 'Hide footer?',
      text: entry.getIn(['data', 'hideFooter']) ? 'True' : 'False',
    },
    {
      heading: 'Paypal cart button code',
      text: entry.getIn(['data', 'paypalCartButtonCode']),
    },
  ];

  // render data into <DataTable /> component
  return <DataTable data={data} />;
};

type StoreDetailsPreviewProps = {
  entry: Entry,
  widgetsFor: WidgetsFor,
};

export let StoreDetailsPreview = ({
  entry,
  widgetsFor,
}: StoreDetailsPreviewProps) => {
  // get list of sites from socialMedia data
  let socialMedia = widgetsFor('socialMedia').map(site => {
    site = site.getIn(['data', 'site']);

    // capitalize the first letter
    return firstLetterToUppercase(site);
  });

  // capitalize the first letter of each keyword
  let keywords = entry
    .getIn(['data', 'keywords'])
    .map(keyword => firstLetterToUppercase(keyword));
  console.log(keywords);

  // pull data from entry for preview in Netlify CMS
  let data = [
    {
      heading: 'Title',
      text: entry.getIn(['data', 'title']),
    },
    {
      heading: 'Description',
      text: entry.getIn(['data', 'description']),
    },
    {
      heading: 'Keywords',
      text: keywords.join(', '),
    },
    {
      heading: 'Logo',
      text: 'N/A',
    },
    {
      heading: 'Social media',
      text: socialMedia.join(', '),
    },
    {
      heading: 'Google Analytics',
      text: entry.getIn(['data', 'googleAnalytics']),
    },
    {
      heading: 'Custom CSS',
      text: entry.getIn(['data', 'customCSS']),
    },
    {
      heading: 'Custom JavaScript',
      text: `${entry.getIn(['data', 'customJS'])}`,
    },
  ];

  // render data in <DataTable /> component
  return <DataTable data={data} />;
};

// Upcoming feature, currently inactive
/* export let StylesPreview = ({ entry }) => {
  let data = [
    {
      heading: 'Color - primary',
      text: entry.getIn(['data', 'colors', 'primary']),
    },
    {
      heading: 'Color - info',
      text: entry.getIn(['data', 'colors', 'info']),
    },
    {
      heading: 'Color - link',
      text: entry.getIn(['data', 'colors', 'link']),
    },
    {
      heading: 'Color - success',
      text: entry.getIn(['data', 'colors', 'success']),
    },
    {
      heading: 'Color - warning',
      text: entry.getIn(['data', 'colors', 'warning']),
    },
    {
      heading: 'Color - danger',
      text: entry.getIn(['data', 'colors', 'danger']),
    },
    {
      heading: 'Font - family',
      text: entry.getIn(['data', 'fonts', 'family']),
    },
    {
      heading: 'Font - heading 1 size',
      text: entry.getIn(['data', 'fonts', 'sizes', 'heading1']),
    },
    {
      heading: 'Font - heading 2 size',
      text: entry.getIn(['data', 'fonts', 'sizes', 'heading2']),
    },
    {
      heading: 'Font - heading 3 size',
      text: entry.getIn(['data', 'fonts', 'sizes', 'heading3']),
    },
    {
      heading: 'Font - heading 4 size',
      text: entry.getIn(['data', 'fonts', 'sizes', 'heading4']),
    },
    {
      heading: 'Font - heading 5 size',
      text: entry.getIn(['data', 'fonts', 'sizes', 'heading5']),
    },
    {
      heading: 'Font - heading 6 size',
      text: entry.getIn(['data', 'fonts', 'sizes', 'heading6']),
    },
    {
      heading: 'Font - body size',
      text: entry.getIn(['data', 'fonts', 'sizes', 'body']),
    },
    {
      heading: 'Font - headings weight',
      text: entry.getIn(['data', 'fonts', 'weights', 'headings']),
    },
    {
      heading: 'Font - body weight',
      text: entry.getIn(['data', 'fonts', 'weights', 'body']),
    },
    {
      heading: 'Button style',
      text: entry.getIn(['data', 'buttonStyle']),
    },
  ];

  return <DataTable data={data} name="Styles" />;
}; */
