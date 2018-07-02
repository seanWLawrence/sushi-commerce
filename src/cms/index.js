import React from "react";
import {PostPreview, ProductPreview, PagePreview, LandingPagePreview} from './previews'
import CMS from 'netlify-cms'

CMS.registerPreviewTemplate('posts', PostPreview);
CMS.registerPreviewTemplate('products', ProductPreview);
CMS.registerPreviewTemplate('pages', PagePreview);
CMS.registerPreviewTemplate('landingPage', LandingPagePreview);
CMS.registerPreviewStyle('/styles.css')