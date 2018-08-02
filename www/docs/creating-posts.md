# Creating posts

??? "Data structure and types"
    ```ts
    type Post = {
      title: string,
      date: string,
      body: string,
      featuredImage: {
        src: string,
        alt: string
      },
      tags: string[],
    }
    ```

## Creating a new post

1. [Login]() to your CMS dashboard
2. Click the "Quick add" dropdown menu at the top of the post and select "Posts"
3. Enter in your information
4. Click "Publish" at the top of the post

## Editing a post

1. [Login]() to your CMS dashboard
2. Click "Posts"
3. Select the post that you'd like to update
4. Enter in your new information
5. Click "Publish" at the top of the post

## Deleting a post

1. [Login]() to your CMS dashboard
2. Click "Posts"
3. Select the post that you'd like to delete
4. Click "Delete published entry" at the top of the post

## Fields

Each field is explained below, along with examples:

### Title

The post title, i.e. "10 things you can do to live healthier"

### Date

The post date, which is done with a built-in date picker

> The date is displayed *and* used to sort blog posts in descending order

### Body

The main content of your post, written in Markdown or with the built-in rich text editor. Sushi Commerce will automatically output the correct HTML, and you can even add your own HTML here if desired

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

### Featured image

The main image for your post, and a description for the image, i.e. "Person doing yogo pose at the edge of a cliff"

### Tags

Tags that describe your post, written as text separated by commas.

For example, Sushi Commerce will turn "Tag one, Tag two" into two tags automatically and display them at the bottom of your post and enter them in your ```<head>``` HTML element for SEO.