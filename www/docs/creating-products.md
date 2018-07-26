# Creating products

Creating a product is as simple as it gets. Sushi Commerce includes built-in support and styling for a title, price, image, list of features, tags, and an HTML product description and payments with a PayPal Cart Button, PayPal Buy Now Button, and Coinbase Commerce button (for cryptocurrency). 

## Fields

The data that can be configured for eeach product.

### Title: ```string```

The product title.

### Price: ```number```

The product price.

### Image: ```{ src: string, alt: string }```

The product image and a description of that image (for SEO).

### Features: ```string```

The product features, written in paragraph form. Separate each feature with a period and the template will automatically create a new line for each feature. 

For example, "A feature. Another feature. And another feature." will become:

- A feature
- Another feature
- And another feature

### PayPal Add to Cart Button Code: ```string```

The code that PayPal automatically generates when you create a new Add to Cart Button. 

#### Generating a new PayPal Add to Cart Button code

1. Login to your PayPal account
2. Hover over "Tools" (in navigation menu), and click "All tools"
3. Click PayPal buttons
4. Click "Add to cart"
5. Enter "Item name," "Price," and any other applicable settings, like shipping, tax, etc. if desired
6. Click "Create button"
7. Click "Select code" and copy the highlighted code 
8. Paste the code into the PayPal Add to Cart Button code field in Sushi Commerce

### PayPal Buy Now Button code: ```string```

The code that PayPal automatically generates when you create a new Buy Now button.

#### Generating a new PayPal Buy Now Button code

1. Login to your PayPal account
2. Hover over "Tools" (in navigation menu), and click "All tools"
3. Click PayPal buttons
4. Click "Buy now"
5. Enter "Item name," "Price," and any other applicable settings, like shipping, tax, etc. if desired
6. Click "Create button"
7. Click "Select code" and copy the highlighted code 
8. Paste the code into the PayPal Buy Now Button code field in Sushi Commerce

### Coinbase Commerce Link: ```string```

The link that Coinbase Commerce automatically generates when you create a new product.

#### Generating a new Coinbase Commerce Button link

1. Login to you Coinbase Commerce account
2. Click "Accept payments" enar the bottom of the screen
3. Click "Sell a product"
4. Enter "Product name," "Price," and if desired, upload a product image and add a brief description
5. Click "Next"
6. Choose what information you want to collect from the customer
7. Copy the link
8. Paste the link into the Coinbase Commerce button link in Sushi Commerce

### Tags: ```string```

Keywords that describe your product, written as text separated by commas. 

For example, to write the tags "Tag one" and "Tag two," you'd enter "Tag one, Tag two" and Sushi Commerce will create two tags automatically and display them at the bottom of your product page and enter them in your <head> HTML element for SEO.

### Description: ```string```

A product description, written with the built-in rich text editor or as markdown. Sushi Commerce will automatically output the correct HTML, and you can even add your own HTML here if desired. 
