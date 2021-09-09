---
title: 'Basic Configuration'
date: '2019-08-04T02:07:25-03:00'
weight: 4
---

In the root folder you will find a file called `config.toml` open this file in any text editor or IDE.

If your theme is not launched in your localhost, then check the `theme` name is correct in configure.toml file. Then run `hugo server` command again.


## Default configuration
In this project folder, you will find a file called `config.toml`. Open this file in any text editor or IDE.

{{< contentblocklist "default-config/" "baseURL" "languageCode" "title" "theme" "summaryLength" "paginate" "disqusShortname" "googleAnalytics" >}}


## Default Parameters
In this project folder, you will find a file called `config.toml`. Open this file in any text editor or IDE.

{{< contentblocklist "default-params/" "favicon" "logo" "logo_width" "logo_text" "description" "author" "image" "contact_form_action" "mainSections" "contact_info" "preloader" "social-la" >}}





## Sitewide configuration

{{< contentblocklist "default-config/" "baseURL" "languageCode" "title" "theme" >}}

## Plugins

You can add third party plugins from here. We created a loop for plugins. You will see two plugins loop already implemented. The first one is for `css` and second one is for `js`. Copy a loop item that you need and paste it in the bottom of the loop. After you added a plugin, you need to restart the hugo server to render properly.

## Default Parameters

1. `Logo` field is for your site logo, you can set a default logo for your site, give here the logo directory.
1. `Home` is for home in your navigation.
1. `description` field is for your default meta description, it will show on your homepage and other page that have not any meta description on this page front-matter.
1. `author` is for site author name.
1. `gmapAPI` field is for google map API key, replace your won gmap API key with it.
1. `mapLatitude` and `mapLongitude` field is for your google map location. you can find this here [http://maps.google.com](http://maps.google.com/)
1. `mapMarker` is for your map pointer, you can set your won map pointer that you want to shaow, maintain the png image size with ( 62\*85) px.
1. `googleAnalitycsID` is for turn on google analytics on your site, give your won analytics ID here.
1. `preloader` is for site preloader, it’s default value is true, but if you don’t want it, you can `false` it.
1. `FormAction` is for contact form action url. contact form works with [formspree](https://formspree.io/)
