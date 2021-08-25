---
title: "Configuration"
date: 2020-12-28T10:00:00+07:00
weight: 2
---

In your sites root folder you will find a file called `config.toml`. Open this file with your text editor or IDE.

## Sitewide configuration

{{< contentblocklist "default-config/" "baseURL" "languageCode" "title" "theme" "summaryLength" "paginate" >}}

## Plugin Configuration

You can add third party plugins from here very easily, We create a loop for plugins, you will see two plugins loop here, first one is for `css` and last one is for `js`. just copy a loop item that you need and paste it in the bottom of the loop. and link correctly, after added a plugins, you maybe need to close the hugo server and run it again for rendered correctly.

## Menu Configuration

* `[[menu.main]]` is the main menu loop, you can add your navigation item by copy and pasting this line.
* `name` attribute is for navigation item name.
* `URL` is for the page url, just give the page name here, it will automatically add the base URL from your site. like if you want to give the about page url here, just type `about` .
* `weight` is for your navigation sorting, the smaller number weight will show first.

## Parameter Configuration

Most parameters in the `[params]` section of your configuration are commented. You can change the basic setup of the theme and add information or enable/disable features.

You can disable features like preloader animation, the buy-now button or the cookie notice by setting `enable` to `false` in these sections. 

The sections `[[params.share]]` define your share buttons below blog posts. You find the parameter in `icon` [here](https://themify.me/themify-icons) - we use the Themify icon font.
