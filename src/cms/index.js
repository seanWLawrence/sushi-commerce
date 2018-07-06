import React from 'react';
import {
  PostPreview,
  ProductPreview,
  PagePreview,
  LandingPagePreview,
  NavigationPreview,
  StoreDetailsPreview,
  StylesPreview,
} from './previews';
import CMS from 'netlify-cms';

// load all preview templates
CMS.registerPreviewTemplate('posts', PostPreview);
CMS.registerPreviewTemplate('products', ProductPreview);
CMS.registerPreviewTemplate('pages', PagePreview);
CMS.registerPreviewTemplate('landingPage', LandingPagePreview);
CMS.registerPreviewTemplate('navigation', NavigationPreview);
CMS.registerPreviewTemplate('storeDetails', StoreDetailsPreview);
CMS.registerPreviewTemplate('styles', StylesPreview);

// load styles (mainly bulma.scss) into all previews
CMS.registerPreviewStyle('/styles.css');
