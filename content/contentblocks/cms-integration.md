---
_build:
    render: never
    list: never
    publishResources: false
---

In this tutorial we will show you how to configure your website to work with a frontend to edit your content without touching a single line of code.

## Requirements

1. Free Git hosting account ([Github](https://github.com/), [Gitlab](https://gitlab.com/), or [Bitbucket](https://bitbucket.org/product/)) to host your website code and content.
1. Free [Netlify](https://www.netlify.com/) account to host your files
1. Free [Forestry](https://forestry.io/) account to maintain your content and settings without code.

## Step 1: Add your website to a Git repository service

Create a git repository (for instance with [Github](https://github.com/), [Gitlab](https://gitlab.com/)) and add your website to it.

## Step 2: Add your repository in Forestry

Go to your [Forestry](https://bit.ly/forestry-account) account and click on `import your site now`. declare your config.toml file \[`exampleSite`\] and fill up basic settings . Mark everything is done then go to configuration to change the base url . You can put any url but this have to similar as netlify . So for now put a name which you are going to put in netlify as netlify subdomain.

## Step 3: Setup and host website with Netlify

Here comes the last step . Go to your [netlify](https://bit.ly/netlify-account) account and click add new site . Choose your git repository to import your website in netlify . And now you can see your repository. Select it and follow the steps. Then go to `site settings` for change the site name and put your subdoamin name here what you puted on forestry as base url. save it and go to `deploy` from top menu, Wait a while and click on `site preview` or just simply go to the subdomain you puted as base url. **BOOM! Your site is live.** Now you can go to forestry and add, remove or customize every setting and content.

## Video Documentation

{{< youtube ResipmZmpDU >}}
