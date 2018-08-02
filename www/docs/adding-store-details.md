# Adding store details

Now that your site is up and running, let's update your site's landing page, store details and navigation menu. Below is a list of all the available options that can be updated in the admin dashboard.

??? "Data structure and types"
    ```ts
    type StoreDetails = {
      landingPage: {
        banner: {
          heading: string,
          subheading: string,
          backgroundImage: {
            src: string,
            alt: string
          },
          overlayColor:
              'moonPurple'
            | 'shifter'
            | 'quepal'
            | 'pinkFlavour'
            | 'orangeFun'
            | 'digitalWater'
            | 'purpink'
            | 'blueSkies'
            | 'nelson'
            | 'aqualicious'
            | 'kyoto'
            | 'mojito'
            | 'lush'
          button: {
            text: string,
            to: string,
            color:
              'primary'
            | 'secondary'
            | 'link'
            | 'info'  
            | 'success'
            | 'warning'
            | 'danger'
            | 'white-ter'
            | 'white'
            | 'gray'
            | 'gray-dark'
            | 'gray-darker'
            | 'black'
            | 'black-ter'
            | 'custom';
          }
        },
        about: {
          heading: string,
          text: string
        },
        features: Array<{
          heading: string,
          text: string,
          icon:
              'calendar-check'
            | 'chart-bar'
            | 'check-circle'
            | 'check-square'
            | 'clock'
            | 'copy'
            | 'comment-dots'
            | 'compass'
            | 'credit-card'
            | 'edit'
            | 'eye'
            | 'file'
            | 'folder-open'
            | 'gem'
            | 'handshake'
            | 'hear'
            | 'id-card'
            | 'images'
            | 'keyboard'
            | 'leaf'
            | 'lightbulb'
            | 'map'
            | 'money-bill-alt'
            | 'paper-plane'
            | 'plus-square'
            | 'save'
            | 'share-square'
            | 'star'
            | 'sticky-note'
            | 'thumbs-up'
            | 'user'
        }>,
        testimonials: Array<{
          name: string,
          text: string
        }>,
      },
      navigation: {
        menuItems: Array<{
          page: string,
          to: string
        }>,
        paypalCartButtonCode: string,
        hideFooter: boolean,
      },
      siteDetails: {
        title: string,
        description: string,
        keywords: string[],
        logo: string,
        socialMedia: Array<{
          href: string,
          site:
              'youtube'
            | 'instagram'
            | 'facebook'
            | 'twitter'
        }>,
        googleAnalytics: string,
        customCSS: string,
        customJS: string
      }
    }
    ```

## Landing Page

The landing page, a.k.a "home page" of your site is arguably the most critical, as most people will judge your store purely by this when they first visit. Sushi Commerce offers several built-in widget section to highlight your company (more coming soon)!

### Banner

The main banner, a.k.a "hero" of your landing page. It contains the following elements:

#### Heading

An elevator pitch for your company, i.e. "We do *this*"

#### Subheading

A call to action statement, i.e. "Try us out today" or a slightly more specific follow up to your heading, i.e. "*This* is what makes us great"

#### Background image

An image that pops to draw people's attention to your heading and call to action statement/button as soon as the page is loaded

#### Overlay color

A beautiful gradient that will be overlaid on top of the background image, so the heading, subheading and button are easier to read

#### Button

A call to action button for asking your customer to try your product(s)

##### Text

The text shown on the button, i.e. "Shop now"

> Default is "Order now"

##### URL

The page within your site that your button will lead to

> Default is "/products"

##### Color

The background color for your button

> Default is "primary"

---

### About

A brief "About us" section to tell your company's story

#### Heading

A title for the section, i.e. "Our story"

> Default is "About us"

#### Text

A brief story about your business and your mission statement

---

### Features

A row of icons that provide some visuals about what your company does

#### Heading

A brief title for the feature, i.e. "Made with love"

#### Text

A brief description of the feature, i.e. "Each product is handmade to perfection"

#### Icon

An icon that best demonstrates the feature, i.e. "heart"

> Sushi Commerce has over 30 built-in icons from Font Awesome to choose from!

---

### Testimonials

A row of customer testimonials to highlight their experience with your products or services.

#### Name

Name of the customer, i.e. "John Doe - Company name"

#### Text

A brief testimonial/review of their experience

> Note: always ask for permission in writing from your customer to share their testimonial and name on your website

---

## Navigation

The navigation settings control the main navigation menu in your site's header, if you want your footer your footer shown/hidden, and your PayPal cart button code (leave this field blank if you don't want to use PayPal's Cart Button).

### Menu items

A list of the pages that will appear in your site's main navigation menu

> Default is "Products," "Posts," and "Contact"

#### Page

The page title, i.e. "Contact"

#### URL

The URL for that page, i.e. "/contact"

### Hide footer?

A boolean (true/false) value for the footer display

> Default is false

### PayPal Cart Button code

The HTML code that is generated after creating a new "View Cart" button on PayPal

#### Generating a PayPal Cart Button Code

1. After [creating your first PayPal Add to Cart Button](/creating-products/#generating-a-new-paypal-add-to-cart-button-code "Creating a PayPal Add to Cart button"), click the "Create a View Cart button" near the bottom of the page
2. Click "Create Button"
3. Click "Select code" and copy the highlighted code 
4. Paste the code in Sushi Commerce under in the "PayPal Cart Button code" field found in settings -> Navigation -> PayPal Cart Button code

---

## Store details

The store details improve search engine optimization for your store by allowing you to easily add your store name, description, keywords, logo, social media links, [Google Analytics](https://marketingplatform.google.com/about/ "Google Analytics home") snippet, and any custom CSS or JavaScript you want.

### Title

Your store's name, i.e. "Bob's beds"

### Description

A brief description of what your company does

### Keywords

A short list of keywords for your site, separated by keywords, i.e. "beds, box springs, sleep"

### Logo

An SVG, PNG or JPG (a.k.a JPEG) image of your store's logo, which will appear in the main navigation menu

> If no logo is supplied, your store's name will appear instead

### Social media links

A list of your social media profiles, which is displayed in your site's footer on every page and in the meta information of your site's header (for SEO)

#### Site

Name of the social media site, i.e. "youtube"

> Sushi Commerce has built-in icons for [Instagram](https://instagram.com "Instagram home"), [Facebook](https://facebook.com "Facebook home"), [YouTube](https://youtube.com "YouTube home") and [Twitter](https://twitter.com "Twitter home") thanks to [Font Awesome](https://fontawesome.com "Font Awesome home")!

#### URL

The URL for your social media profile, i.e. `https://facebook.com/bobsbeds`

### Google Analytics snippet

Your Google Analytics ID, i.e. "UA-XXXXX-Y"

### Custom CSS

Any custom CSS that you want to apply to the site to override the default styles

### Custom JavaScript

Any custom JavaScript that you want to apply to the site

> Note: this application is server-side rendered, which means that some JavaScript that's only designed for the browser may not work as expected