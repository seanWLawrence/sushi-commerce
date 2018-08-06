# Getting started

Sushi Commerce is designed to be as simple as possible, with powerful built-in features like a blog, contact form, landing page, and most importantly, product pages.

## Prerequisites

### Git host

You'll need to create either a [GitHub](https://github.com "GitHub home"), [GitLab](https://gitlab.com "GitLab home") or [BitBucket](https://bitbucket.com "BitBucket home") to host your website's code. You can create a free account on any of these platforms, but note that GitHub currently only offers free hosting for public repos (menaing that the source code for your website will be public). GitLab and BitBucket have free accounts that allow private repos.

### CDN service

We strongly recommend [Netlify](https://netlify.com "Netlify CDN home") as your host, because of their insanely simple and powerful service, tight integration with the CMS (they designed and open sourced it!), and best of all they offer free hosting for Sushi Commerce! You can also use another service like CloudFlare or AWS CloudFront, though you'll need to configure your own authentication for the CMS.

## Installation

Sushi Commerce offers two installation methods for both "turn key" and custom usage.

### Quick installation

You can deploy Sushi Commerce **in less than a minute** thanks Netlify's amazing support for git-hosted static websites like this, and the best part is, hosting is free!*

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/seanWLawrence/sushi-commerce "Deploy Sushi Commerce to Netlify")

Click "Save and deploy" and then once the site is built in a few minutes, you'll see a pre-generated link that you can click and access your new store, i.e. `brave-cori-e1a7dd.netlify.com`! Continue on to [Authentication](/#authentication "Authentication instructions")

### Custom installation

You can also clone our repo and use your own host/cdn, modify the configuration, update the styling, etc.

``` shell
git clone https://github.com/sushi-commerce.git
```

## Authentication

To access the CMS dashboard, you'll need to set up authentication to ensure that only the right people are able to update your site's information.

### Git gateway (default)

TODO

### Github authentication

Sushi Commerce uses the GitHub backend authentication feature of Netlify CMS by default, here's how to set it up for your new store:

**Allow Netlify CMS permission to your GitHub repo**:

1. Visit the [applications section](https://github.com/settings/developers "Github applications section") of your GitHub dashboard
2. Click "Register a new application"
3. Enter `https://api.netlify.com/auth/done` for the "Authorization callback URL" field
4. Fill out the rest of the fields with information about your website (these are just there for you to reference later) and click "Register application"
5. Save the "Client ID" and "Client secret" that GitHub provides you with for the next step

**Enter your GitHub Client ID and Client secret in Netlify**:

1. Go to your [Netlify dashboard](https://app.netlify.com/?_ga=2.2076466.2064525853.1533155603-226890088.1503488970 "Netlify dashboard") and click on your project
2. Navigate to Settings > Access control > OAuth
3. Under Authentication Providers, click Install Provider
4. Select GitHub and enter the Client ID and Client Secret, then save

That's it!

### GitLab Authentication

Another popular git host is [GitLab](https://gitlab.com "GitLab home"). Here's how to set up authentication with GitLab for your new store:

**Allow Netlify CMS permission to your GitLab repo**:

1. Visit the [applications section](https://gitlab.com/oauth/applications/ "GitLab applications section") of your GitLab dashboard
2. Click "Register a new application"
3. Enter `https://api.netlify.com/auth/done` for the "Authorization callback URL" field
4. Enter the name for your website in the "Name" field (this is just there for you to reference later) and click "Register application"
5. Save the "Application ID" and "Secret" that GitLab provides you with for the next step

**Enter your GitLab Application ID and Secret in Netlify**:

1. Go to your [Netlify dashboard](https://app.netlify.com/?_ga=2.2076466.2064525853.1533155603-226890088.1503488970 "Netlify dashboard") and click on your project
2. Navigate to Settings > Access control > OAuth
3. Under Authentication Providers, click Install Provider
4. Select GitLab and enter the Application ID and Secret, then save

**Update your configuration file**
Lastly, replace the `backend` values in your `static/admin/config.yml` file with `gitlab` and your repo name

#### Example

```yml
backend:
  name: gitlab
  repo: tom1234/sushi-commerce
```

### Other authentication methods

You can also use other authentication methods if you prefer, like [Netlify Identity](https://www.netlifycms.org/docs/authentication-backends/#git-gateway-with-netlify-identity "Setting up Netlify Identity aunthentication") (free for simple usage)*, [GitLab](https://www.netlifycms.org/docs/authentication-backends/#gitlab-backend "Setting up GitLab authentication"), and [Netlify CMS' Git Gateway with your own server](https://www.netlifycms.org/docs/authentication-backends/#git-gateway-without-netlify "Setting up Git Gateway authentication").

> *Sushi Commerce is not affiliated with Netlify and Netlify's pricing may change at any time without our knowledge.

## Setting up the contact form

TODO