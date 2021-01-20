---
title: "Adrian"
linktitle: "Adrian"
premium: true
date: 2018-12-28T11:02:05+06:00 
---

## Requirements

At first download latest version of [Hugo](https://gohugo.io/getting-started/installing/) for your OS (Windows, Linux, Mac).

## Installation

The following steps are here to help you initialize your new website. If you don’t know Hugo at all, we strongly suggest you learn more about it by following this [great documentation for beginners](https://gohugo.io/overview/quickstart/).

## Create your project

Hugo provides a `new` command to create a new website

```shell script
hugo new site theme_name
```

## Theme Setup

After creating new site, open this folder and you will find a folder called `themes`. Open this folder and place your downloaded themes here (extracted folder). now open it and you will see a folder called `exampleSite`

In this folder you need to copy/cut every folder and file, then go back to your root folder that you create with `theme_name` . and paste everything here, it will asked you for replacement file and folder, click on replace, and it will replace with the necessary file. You are all set.

## Launching the website locally

Now you can run this theme in your localhost by this `hugo server` command in the root folder directory. and you can see this on [localhost:1313](http://localhost:1313/)

## Video documentation

If you don’t understand the theme setup steps, you can follow this video documentation.

{{< youtube jrkvirglgaQ >}}

## Default configuration

In this root folder you will find a file called `config.toml` open this file in any text editor or IDE.

If your theme is not launched in your localhost, then check the `theme` name is correct in `config.toml` file. Then run `hugo server` command again.

1. At the top you will see a `baseURL` field for your site URL. Give your site URL here.
1. `LanguageCode` field is for your site language.
1. `Title` field is for the site title.
1. Then the `Theme` field that you are already declared.
1. `SummaryLeangth` is for post excerpt limit. you can set your post excerpt length as you want to show.
1. `Pagination` field is for blog list page pagination. The list pages will show the amount of posts you configure here.
1. ` disqusShortname` is for post comments, you can get your shortname [here](https://disqus.com/)

## Plugins

You can add third party plugins from here. We created a loop for plugins. You will see two plugins loop already implemented. The first one is for `css` and second one is for `js`. Copy a loop item that you need and paste it in the bottom of the loop. After you added a plugin, you need to restart the hugo server to render properly.

## Default Parameters

1. `Logo` field is for your site logo, you can set a default logo for your site, give here the logo directory.
1. `Home` is for home in your navigation.
1. `author` is for site author name.
1. `description` field is for your default meta description, it will show on your homepage and other page that have not any meta description on this page front-matter.
1. `snipcartAPI` is for active the snipcart, go to [snipcart](https://snipcart.com/) , create your account and generate a snipcart public API key. and replace with it.
1. `currency` is for your store currency.
1. `googleAnalitycsID` is for turn on google analytics on your site, give your won analytics ID here.
1. `contactFormAction` is for enable contact form in contact page, contact form works with [formspree](https://formspree.io/).
1. `copyright` is for copyright text in the bottom of the page.
1. `preloader` is for site preloader, you can enable or disable preloader by enable = true or false, then if you want any image, logo, or animation in preloader then give the location in `preloader = `, like `preloader = images/preloader.gif` or if you don’t want any logo or image then leave the preloader field empty, then it will show a white screen when every component is loading. that’s simple.
1. `Search` is for blog post search, you can enable or disable it from here.

## Main navigation

1. `[[menu.main]]` is the main loop, you can add your navigation item by copy and paste this line.
1. `name` attribute is for navigation item name.
1. `URL` is for the page url, give the page name here, it will automatically add the base URL from your site. like if you want to give the about page url here, type `about`.
1. `weight` is for your navigation sorting, the smaller number weight will show first.
1. For `dropdown menu` you need to add another attribute called `hasChildren = true` , and remove `URL`. then give 1 tab space for understanding hugo that is a children menu item. and paste this `[[menu.main]]` again, then give the `parent =` attribute here. parent name should be the dropdown item name, then give the page `name` and `URL`.
1. `navBtn` is for navigation button that we provided in this theme, if you don’t want it, you can turn off this, you will see `navBtn` bottom of the main navigation, you can set `enable = false` for hide this button, true is the default value, you can set button label and url here. this url is also like the navigation url, you need to give the page name.

## Pages

The content of all pages comes from the `data` folder (except for blog entries). After opening the data folder you will see all page contents file, like `homepage.yml` for homepage, `about.yml` for about page.

You can exchange the demo content with your own content, but remember that you have to follow the existing indentation in the demo content. If you miss the indentation will get an error. Copy the loop, and change your content. Every loop starts with `-` this symbol.

## Configure Product

Hugo provides a `new` command to create a post, as a example for creating a new post is `hugo new shop/new-product.md` , it will create a product.

You can configure your product from the front-matter. Front-matter starts with `---` and end with also `---` . In this front matter you can the value of your meta description tag: `description = text for your meta tag`, bgImage if for page title `bgImage = images/backgrounds/header-bg.jpg`, `images` is a loop. you can set the images for a product, the first one will show as product thumb, and other images will show up on the products single page. Then set the price for the product in `price` , if it has discount then give the previous price in `priceBefore`. Otherwise leave it empty. Then declare the product category, colors, sizes and other details.

When you created a new post, the `draft` default value is true, and when the draft is true your post will not show, you need to change it for showing this post. like `draft = false`. Then your post will show in blog page.

After closing front matter give your product content, remember that every file that has an `.md` extension, are supports markdown.
