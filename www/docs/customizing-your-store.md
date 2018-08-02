# Customizing your store

Sushi Commerce is designed to work great out of the box, but you can easily make changes to suit your brand. Check out our [roadmap](/roadmap/ "Upcoming features") for news on upcoming features like color, font family, font size and button style theme editing in the CMS without touching any code!

## File structure

Sushi Commerce is built on top of [Gatsby.js]("https://gatsbyjs.org "Gatsby JS open source home") and uses the following site structure, folloiwng the Gatsby conventions:

```ascii
src/
  |-- cms/                // Netlify CMS components
  |-- components/         // UI components
  |-- data/               // Data files
  |-- layouts/            // Layout component and styles
  |-- pages/              // All posts, products and pages
  |-- templates/          // Templates for posts, products and pages
static/                   // Files not processed by Gatsby
  |-- admin/              // Netlify CMS configuration
  |-- images/             // Images
www/                      // Documentation website
gatsby-node.js            // Create pages using templates
gatsby-config.js          // Gatsby configuration
```

## Editing the theme

Sushi Commerce uses [bulma.css](https://bulma.io "Bulma CSS Framework") for most of its styling. To update the color and font, set your own values for the following variables in the `src/layouts/index.scss` file **before** the `@import "~bulma";` line.

### Editing the color

Update the `$primary` variable with the CSS color value that you want to use as the primary color. You can use any CSS color value, including RGB, RGBA, HSL, HEX and a named one like the example `cornflowerblue`.

#### Example

```scss
// src/layouts.index.scss

$primary: cornflowerblue;

@import "~bulma";
```

### Editing the font

Update the `$family-primary` variable with the CSS font family value that you want to use as the font.

#### Example

```scss
// src/layouts.index.scss

$family-primary: "Times New Roman";

@import "~bulma";
```

### Editing more

You can edit other variables, such as the breakpoints, spacing and more with Bulma's other 
[SASS variables](https://bulma.io/documentation/customize/variables/ "Bulma CSS customizing styles") in this file.

Feel free to include your own SCSS, SASS or CSS styles in this file as well. It'll all get comiled and imported into the main `src/layouts/index.js` file so all pages will have access to them.

### Templates

Gatsby.js uses templates and layouts for consistent styles. Here's where you can find all of them and what pages they style:

- Main site layout, affects every page: `src/layouts/index.js`
- Landing page (shown at the "/" URL): `src/pages/index.js`
- Products (shown at the "/products" URL): `src/pages/products/index.js`
- Posts (shown at the "/posts" URL): `src/pages/posts/index.js`
- Product: `src/templates/product.js`
- Post: `src/templates/post.js`
- Page: `src/templates/page.js`

## Flow.js

Sushi Commerce uses the [Flow static type checker for JavaScript](https://flow.org "Flow.js home") and is already set up for use in any new file that you create and add the `// @flow` code to the top of the file. Check out the [docs](https://flow.org/en/docs/getting-started "Getting started with Flow.js") to learn more about how to use Flow.

In a nutshell, Flow checks your code to ensure that you're passing the correct types in your functions and variables before you run your code. It dramatically boosts your workflow as well with autocompletion, suggestions and errors with plugins for your favorite text editor like [Microsoft Visual Studio Code](https://github.com/flowtype/flow-for-vscode "Flow plugin for VS Code")

## Editorial workflow

You can add the Netlify CMS [Editorial workflow](https://www.netlifycms.org/docs/configuration-options/#publish-mode "Netlify CMS Editorial workflow") if your site is hosted on GitHub, and you want to have an option to save posts, pages, and products as drafts before publishing them. By default this is turned off. Add the `editorial_workflow: true` to the very top your ```static/admin/config.yml``` file to include it:

### Example

```yml
editorial_workflow: true
backend:
  name: github
  repo: seanwlawrence/sushi-commerce
  branch: master
```

> Make sure this line of code is **not** indented, or it will cause an error.

## Further reading

For more information on any of the [open source technologies](/open-source/ "List of open source used on Sushi Commerce"), check out their docs and don't hesitate to [raise an issue](https://github.com/seanWLawrence/sushi-commerce/issues/new "Raise an issue on Sushi Commerce GitHub repo") if you have any questions, suggestions or want to [contribute](/contributing/ "Contributing guidelines")!