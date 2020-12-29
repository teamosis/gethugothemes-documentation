---
title: 'Basic Configuration'
date: '2019-12-02T08:14:55-03:00'
weight: 3
---

In this root folder you will find a file called `config.toml` open this file in any text editor or IDE.

If your theme is not launched in your localhost, then check the `theme` name is correct in `config.toml` file. Then run `hugo server` command again.

## Default configuration

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
