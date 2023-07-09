---
title: 'Basic Configuration'
date: '2019-11-12T06:01:52-03:00'
weight: 4
draft: false
---

Here is the default configuration and basic parameters for your website. You can change those as per your requirements.

## Default configuration

In this project folder, you will find a file called `config/_default/config.toml`. Open this file in any text editor or IDE.

{{< contentblocklist "default-config/" "baseURL" "languageCode" "title" "theme" "summaryLength" "paginate" "disqusShortname" "googleAnalytics" >}}

## Default Parameters

In this project folder, you will find a file called `config/_default/params.toml`. Open this file in any text editor or IDE.

{{< contentblocklist "default-params/" "favicon" "logo" "logo_width" "logo_text" "description" "author" "image" "contact_form_action" "mainSections" "contact_info" "preloader" "social-la" >}}
Default Parameters
------------------

1. `Logo` field is for your site logo, you can set a default logo for your site, just give here the logo directory.
2. <font color="#23282d" face="Menlo, Consolas, monaco, monospace"><span style="background-color: rgb(232, 234, 235);">Home</span></font> is for home in your navigation.
3. `description` field is for your default meta description, it will show on your homepage and other page that have not any meta description on this page front-matter.
4. `googleAnalitycsID` is for turn on google analytics on your site, give your won analytics ID here.
5. `contactFormAction` is for enable contact form in contact page, contact form works with [formspree](https://formspree.io/).
6. `copyright` is for copyright text in the very bottom of the page.
7. `preloader` is for site preloader, you can enable or disable preloader by enable = true or false, then if you want any image, logo, or animation in preloader then give the location in `preloader =`, like `preloader = images/preloader.gif` or if you don’t want any logo or image then leave the preloader field empty, then it will show just a white screen when every component is loading. that’s simple.
8. `Search` is for blog post search, you can enable or disable it from here.
