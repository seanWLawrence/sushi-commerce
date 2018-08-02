# Getting started

Sushi Commerce is designed to be as simple as possible, with powerful built-in features like a blog, contact form, landing page, and most importantly, product pages.

## Installation

Sushi Commerce offers two installation methods for both "turn key" and custom usage.

### Quick installation

You can deploy Sushi Commerce **in less than a minute** thanks Netlify's amazing support for git-hosted static websites like this, and the best part is, hosting is free!*

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/seanWLawrence/sushi-commerce "Deploy Sushi Commerce to Netlify")

### Custom installation

You can also clone our repo and use your own host/cdn, modify the configuration, update the styling, etc.

``` shell
git clone https://github.com/sushi-commerce.git
```

## Authentication

Since Sushi Commerce has a built-in CMS (powered by Netlify CMS), we strongly recommend setting up authentication to ensure that only the right people are able to update your site's information.

### Github authentication (default)

Sushi Commerce uses the GitHub backend authentication feature of Netlify CMS. To set it up for your GitHub account, simply follow [the official steps](https://www.netlify.com/docs/authentication-providers/#using-an-authentication-provider "Instructions for setting up GitHub authentication with Netlify") provided by Netlify or the shortened version below.

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

### Other authentication methods

You can also use other authentication methods if you prefer, like [Netlify Identity](https://www.netlifycms.org/docs/authentication-backends/#git-gateway-with-netlify-identity "Setting up Netlify Identity aunthentication") (free for simple usage)*, [GitLab](https://www.netlifycms.org/docs/authentication-backends/#gitlab-backend "Setting up GitLab authentication"), and [Netlify CMS' Git Gateway with your own server](https://www.netlifycms.org/docs/authentication-backends/#git-gateway-without-netlify "Setting up Git Gateway authentication").

> *Sushi Commerce is not affiliated with Netlify and Netlify's pricing may change at any time without our knowledge.
