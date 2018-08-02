# Creating products

Creating a product is as simple as it gets. Sushi Commerce includes built-in support and styling for a title, price, image, list of features, tags, and an HTML product description and payments with a PayPal Cart Button, PayPal Buy Now Button, and Coinbase Commerce button (for cryptocurrency). 

??? "Data structure and types"
    ```ts
    type Product = {
      title: string,
      price: number,
      image: {
        src: string,
        alt: string
      },
      features: string,
      paypalAddToCartButtonCode: string,
      paypalBuyNowButtonCode: string,
      coinbaseCommerceLink: string,
      tags: string[],
      body: string,
    }
    ```

## Creating a new product

1. [Login]() to your CMS dashboard
2. Click the "Quick add" dropdown menu at the top of the page and select "Products"
3. Enter in your information
4. Click "Publish" at the top of the page

## Editing a product

1. [Login]() to your CMS dashboard
2. Click "Products"
3. Select the product that you'd like to update
4. Enter in your new information
5. Click "Publish" at the top of the page

## Deleting a product

1. [Login]() to your CMS dashboard
2. Click "Products"
3. Select the product that you'd like to delete
4. Click "Delete published entry" at the top of the page

## Fields

Each field is explained below, along with examples:

### Title

The product title, i.e. "Boat shoes"

### Price

The product price, i.e. "60"

### Image

The product image and a description of that image (for SEO), i.e "Model wearing black boat shoes"

### Features

The product features, written in paragraph form. Separate each feature with a period and the template will automatically create a new line for each feature.

For example, Sushi Commerce will turn "A feature. Another feature. And another feature." into:

- A feature
- Another feature
- And another feature

### PayPal Add to Cart Button Code

The HTML that PayPal automatically generates when you create a new Add to Cart button

#### Generating a new PayPal Add to Cart Button code

1. Login to your PayPal account
2. Hover over "Tools" (in navigation menu), and click "All tools"
3. Click PayPal buttons
4. Click "Add to cart"
5. Enter "Item name," "Price," and any other applicable settings, like shipping, tax, etc. if desired
6. Click "Create button"
7. Click "Select code" and copy the highlighted code 
8. Paste the code into the PayPal Add to Cart Button code field in Sushi Commerce

### PayPal Buy Now Button Code

The HTML that PayPal automatically generates when you create a new Buy Now button

#### Generating a new PayPal Buy Now Button code

1. Login to your PayPal account
2. Hover over "Tools" (in navigation menu), and click "All tools"
3. Click PayPal buttons
4. Click "Buy now"
5. Enter "Item name," "Price," and any other applicable settings, like shipping, tax, etc. if desired
6. Click "Create button"
7. Click "Select code" and copy the highlighted code 
8. Paste the code into the PayPal Buy Now Button code field in Sushi Commerce

### Coinbase Commerce Link

The link that Coinbase Commerce automatically generates when you create a new product

#### Generating a new Coinbase Commerce Button link

1. Login to you Coinbase Commerce account
2. Click "Accept payments" enar the bottom of the screen
3. Click "Sell a product"
4. Enter "Product name," "Price," and if desired, upload a product image and add a brief description
5. Click "Next"
6. Choose what information you want to collect from the customer
7. Copy the link
8. Paste the link into the Coinbase Commerce button link in Sushi Commerce

### Tags

Keywords that describe your product, written as text separated by commas.

For example, Sushi Commerce will turn "Tag one, Tag two" into two tags automatically and display them at the bottom of your product page and enter them in your ```<head>``` HTML element for SEO.

### Description

The main content of your product, written in Markdown or with the built-in rich text editor. Sushi Commerce will automatically output the correct HTML, and you can even add your own HTML here if desired

For example, Sushi Commerce will turn this Markdown:

```md
# Title 1

Some text and a [link](/url-on-this-site).
```

Into pure HTML:

```html

<h1>Title 1</h1>
<p>Some text and a <a href="/url-on-this-site">link</a>
```

Here's a [Markdown cheat sheet](https://guides.github.com/pdfs/markdown-cheatsheet-online.pdf) if you're not familiar with the syntax.