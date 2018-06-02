# Sushi Commerce
Create a super fast, full-featured static e-commerce website generator and CMS using React.js, Gatbsy.js and Netlify CMS. 

## Why
Most websites don't need a database and all of the baggage that comes with it. With Sushi Commerce, you can host your e-commerce site for free on a CDN like [Netlify](https://netlify.com) and store your files in Git for powerful version control. Payments are made easily with PayPal Buttons and Coinbase Commerce and all you have to do is simply add content and create your color and font scheme in the CMS panel (no coding necessary!) and start selling your products!

## Easy setup

1. Deploy Sushi Commerce by clicking the button below and creating a free account with Netlify.
<button>Deploy to Netlify</button>
2. Update the `config.yml` file, located in `static/admin/` by changing the value of the GitHub repo to your repo, i.e.

```yaml
backend:
  name: github
  repo: your-name/your-repo-name
  branch: master
``` 
3. Visit your site by clicking the randomly generated URL mde by Netlify and add `/admin` to the end of the URL, i.e. if your randmly generated URL from Netlify is `http://kungfu-beaver-pool.netlify.com/`, then you can access the admin dashboard/CMS by visiting `http://kungfu-beaver-pool.netlify.com/admin`. 
4. Log in with GitHub
5. Add content to your site, like your color scheme, title, payment information, etc. See API for more details. 

## Manual installation
`git clone https://github.com/seanwlawrence/sushi-commerce.git && cd sushi-commerce && yarn`

> This script simply downloads Sushi Commerce to the folder that you're in, open it, and then install all of the dependencies.

## Getting started
1. Update the `config.yml` file, located in `static/admin/` by changing the value of the GitHub repo to your repo, i.e.
```yaml
backend:
  name: github
  repo: your-name/your-repo-name
  branch: master
```
2. Add content by visiting your website address, either the automatically created one from netlify or the custom one
3. Update the `config.yml` file, located in `static/admin/` by changing the value of the GitHub repo to your repo, i.e.

```yaml
backend:
  name: github
  repo: your-name/your-repo-name
  branch: master
``` 
4. Visit your site by running `yarn run build:serve` in your terminal. 
> This script will build your site and launch it locally on your computer on port 9000.
5. Visit `localhost:9000/admin` in your browser to access the admin dashboard/CMS.
6. Log in with GitHub.
7. Add content to your site, like your color scheme, title, payment information, etc. See API for more details. 
8. When you're ready to launch your site, simply [upload your folder to Netlify]() and see your site live!

## API (TODO)

## Contribution
Contributions are welcome! Below is the roadmap for new features that I'll be adding to Sushi Commerce, and simply create an issue here on GitHub if you'd like to offer your help and let's talk! See [style guide]() for details on styling/formatting and [guidelines]() for steps on how to contribute.

## License
Sushi Commerce is made with the MIT License, have fun!