# Adding store details

Now that your site is up and running, let's update your site's landing page, store details and navigation menu.

??? "Field types"
    ```
    type storeDetails = {
      landingPage: {
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
        icon: | |
      }>,
      testimonials: Array<{
        name: string,
        text: string
      }>
    }
    ```
## Landing Page 

The landing page, a.k.a "home page" of your site is arguably the most critical, as most people will judge your store purely by this when they first visit. Sushi Commerce offers several built-in widget section to highlight your company (more coming soon)!


### Banner

The main banner, a.k.a "hero" of your landing page. 

#### Heading

#### Subheading: ```string```

#### Background image: ```{}```

##### 
- Banner
    - Heading
    - Subheading
    - Background image
    - Overlay color
    - Button
      - Text
      - URL
      - Color
- About
    - Heading
    - Text
- Features (add as many as you want, though we recommend >= 4)
    - Heading
    - Text
    - Icon
- Testimonials (add as many as you want, though we recommend >= 4)
    - Name
    - Text

## Navigation

The navigation settings control the main navigation menu in your site's header, if you want your footer your footer shown/hidden, and your PayPal cart button code (leave this field blank if you don't want to use PayPal's Cart Button).

Fields:

- Menu items (add as many as you want)
    - Page
    - URL
- Hide footer?
- PayPal cart button code

### PayPal Cart Button code

1. After [creating your first PayPal Add to Cart Button code](/creating-products/#generating-a-new-paypal-add-to-cart-button-code), click the "Create a View Cart button" near the bottom of the page
2. Click "Create Button"
3. Click "Select code" and copy the highlighted code 
4. Paste the code in Sushi Commerce under in the "PayPal Cart Button code" field found in ettings -> Navigation -> PayPal Cart Button code


## Store details

The store details control the site's title, meta description, keywords, logo, social media links, Google Analytics snippet, and any custom CSS or JavaScript.

Fields:

- Title
- Description
- Keywords (add as many as you want)
- Logo
- Social media links
    - Site
    - URL
- Google Analytics snippet
- Custom CSS
- Custom JavaScript
