# Getting started

Sushi Commerce is designed to be as simple as possible, with powerful built-in features like a blog, contact form, landing page, and most importantly, product pages.

## Installation

Sushi Commerce offers two installation methods for both "turn key" and custom usage.

### Quick installation

You can deploy Sushi Commerce **in less than a minute** thanks Netlify's amazing support for git-hosted static websites like this, and the best part is, hosting is free!*

<button style="background-color: green; padding: 10px 20px; color: #fff;">Deploy to Netlify</button>

### Custom installation

You can also clone our repo and use your own host/cdn, modify the configuration, update the styling, etc.

``` shell
git clone https://github.com/sushi-commerce.git
```

> Currently, Netlify CMS supports git hosting with GitHub and GitLab, but not Amazon S3 or BitBucket just yet (though they're almost done with BitBucket support). Also note, GitLab hosting requires you to remove the ```editorial_workflow``` setting in the ```src/admin/config.yml``` file

## Authentication

Since Sushi Commerce has a built-in CMS (powered by Netlify CMS), we strongly recommend setting up authentication to ensure that only the right people are able to update your site's information.

### Github (default setting)

Sushi Commerce uses the GitHub backend authentication feature of Netlify CMS. To set it up for your GitHub account, simply follow [these steps](https://www.netlify.com/docs/authentication-providers/#using-an-authentication-provider) provided by Netlify.

### Other authentication methods

You can also use other authentication methods if you prefer, like [Netlify Identity](https://www.netlifycms.org/docs/authentication-backends/#git-gateway-with-netlify-identity) (free for simple usage)*, [GitLab](https://www.netlifycms.org/docs/authentication-backends/#gitlab-backend), and [Netlify CMS' Git Gateway with your own server](https://www.netlifycms.org/docs/authentication-backends/#git-gateway-without-netlify).

> *Sushi Commerce is not affiliated with Netlify and Netlify's pricing may change at any time without our knowledge.