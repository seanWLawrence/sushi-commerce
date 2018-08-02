# Creating pages

??? "Data structure and types"
    ```ts
    type Page = {
      title: string,
      tags: string[],
      body: string,
    }
    ```

## Creating a new page

1. [Login]() to your CMS dashboard
2. Click the "Quick add" dropdown menu at the top of the page and select "Pages"
3. Enter in your information
4. Click "Publish" at the top of the page

## Editing a page

1. [Login]() to your CMS dashboard
2. Click "Pages"
3. Select the page that you'd like to update
4. Enter in your new information
5. Click "Publish" at the top of the page

## Deleting a page

1. [Login]() to your CMS dashboard
2. Click "Pages"
3. Select the page that you'd like to delete
4. Click "Delete published entry" at the top of the page

## Fields

Each field is explained below, along with examples:

### Title

The title of the page

### Body

The main content of your page, written in Markdown or with the built-in rich text editor. Sushi Commerce will automatically output the correct HTML, and you can even add your own HTML here if desired

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

### Tags

Tags that describe your page, written as text separated by commas.

For example, Sushi Commerce will turn "Tag one, Tag two" into two tags automatically and display them at the bottom of your page and enter them in your ```<head>``` HTML element for SEO.