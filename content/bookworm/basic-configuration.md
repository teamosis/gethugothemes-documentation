---
title: 'Basic Configuration'
date: '2020-05-10T02:54:59-03:00'
weight: 2
draft: false
---
In this root folder you will find a file called `config.toml` open this file in any text editor or IDE.

If your theme is not launched in your localhost, then check the `theme` name is correct in config.toml file. Then run `hugo server` command again.

## Sitewide configuration

{{< contentblocklist "configsidewide/" "baseURL" "theme" "title" "summaryLength" "defaultContentLanguage" "disableLanguages" "disqusShortname" "googleAnalytics" >}}

Plugins
-------

You can add third party plugins from here very easily, We create a loop for plugins, you will see two plugins loop here, first one is for `css` and last one is for `js`. just copy a loop item that you need and paste it in the bottom of the loop. and link correctly, after added a plugins, you maybe need to close the hugo server and run it again for rendered correctly.

Default Parameters
------------------

1. `Logo` field is for your site logo, you can set a default logo for your site, just give here the logo directory.
2. `logo_height`: define your logo height for perfect fit.
3. `menu_align`: You can set it `left`, `right`, or `center`. 
4. `description` field is for your default meta description, it will show on your homepage and other page that have not any meta description on this page front-matter.
5. `author` is for site author name.
6. Contact info has some filed to show your contact information in footer and contact page.
7. `contact_form_action` is for contact form. it work’s with [formspree](https://formspree.io/).
8. `search` can be disabled, if it has `false` value.
10. `sidebar` has 3 different values, choose your favorite on from left, right or false. if you choose false, it will no longer visible.
11. `mainSection`: If you change the main section name from `blog` to something else, then change the mainSection name to your something else name.
12. `post_layout`: You have two different value to choose for your post layout. you can choose `list` to see list view, or you can select `grig` for grid view.
13. `preloader` is for site preloader, you can enable or disable preloader by enable = true or false, then if you want any image, logo, or animation in preloader then give the location in `preloader = `, like `preloader = images/preloader.gif` or if you don’t want any logo or image then leave the preloader field empty, then it will show just a white screen when every component is loading. that’s simple.
14. `social` is for social icons. you can choose more icons from here
15. Language is for multilingual content. we used two languages here. you can add more language following this example content.
16. `instafeed`: You can set the value to `false` if you don't want to show it. We provide some static image with the theme, but whenever you give the `access token` it will automatically show up the original image from your instagram.
17. `cookies`: you can set cookie consent messege on and set expiry days from here.
18. `widgets`: All sidebar widgets are customizable. Here is the available widgets that we provided with the theme `search`, `categories`, `tags`, and  `social`.