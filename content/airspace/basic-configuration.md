---
title: 'Basic Configuration'
date: '2019-07-28T04:22:55-03:00'
weight: 5
---

In this root folder you will find a file called `config.toml` open this file in any text editor or IDE.

If your theme is not launched in your localhost, then check the `theme` name is correct in config.toml file. Then run `hugo server` command again.

## Sitewide configuration

{{< contentblocklist "configsidewide/" "baseURL" "title" "theme" "summaryLength" "disqusShortname" "defaultContentLanguage" "disableLanguages" >}}

## Plugins

You can add third party plugins from here. We created a loop for plugins. You will see two plugins loop already implemented. The first one is for `css` and second one is for `js`. Copy a loop item that you need and paste it in the bottom of the loop. After you added a plugin, you need to restart the hugo server to render properly.

## Default Parameters

1. `Logo` field is for your site logo, you can set a default logo for your site. Give here the logo directory.
1. `description` field is for your default meta description, it will show on your homepage and other page that have not any meta description on this page front-matter.
1. `author` is for site author name.
1. Contact info has some filed to show your contact information in footer and contact page.
1. `contact_form_action` is for contact form. it work’s with [formspree](https://formspree.io/).
1. `google_analitycs_id` is for turn on google analytics on your site, give your won analytics ID here.
1. `preloader` is for site preloader, you can enable or disable preloader by enable = true or false. If you want any image, logo, or animation in the preloader then give the location in `preloader =`, like `preloader = images/preloader.gif` or if you don’t want any logo or image then leave the preloader field empty, then it will show a white screen when every component is loading. that’s simple.
1. `search` for search any content. you can disable it if you don’t need.
1. `nav_button` is for main navigation button, you can enable or disable it.
1. `gmap` field is for google map , replace your won gmap API key with `gmap_api`. `map_latitude` and `map_ongitude` field is for your google map location. you can find this here [http://maps.google.com](http://maps.google.com/)
1. `map_marker` is for your map pointer, you can set your won map pointer that you want to show, but maintain the png image size with ( 46\*50) px.
1. `social` is for social icon. you can choose more icon from [here](https://themify.me/themify-icons)
1. `Language` is for multilingual content. we used two language here. you can add more language following this example content.
