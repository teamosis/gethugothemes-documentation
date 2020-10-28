---
title: 'Basic Configuration'
date: '2019-07-28T04:23:17-03:00'
weight: 5
---

In this root folder you will find a file called `config.toml` open this file in any text editor or IDM.

If your theme is not launched in your localhost, then check the `theme` name is correct in config.toml file. Then run `hugo server` command again.

## Default configuration

1. At the top you will see a `baseURL` field for your site URL. Give your site URL here.
1. `Title` is for your site title.
1. Then the `Theme` field that you are already declared.
1. `SummaryLeangth` is for post excerpt limit. you can set your post excerpt length as you want to show.
1. `disqusShortname` is for activate comment section on blog page. get your disqus short name from [here](https://disqus.com/).
1. `DefaultContentLanguage` field is for your site default language, which will load first with your site load.
1. `disableLanguages` field is for disable languages, if you don’t want to show one or more then one you can add the language name here, it will disabled those languages from your site. example `disableLanguages = ["fr"]` it will desabled french language from your site.

## Plugins

You can add third party plugins from here. We created a loop for plugins. You will see two plugins loop already implemented. The first one is for `css` and second one is for `js`. Copy a loop item that you need and paste it in the bottom of the loop. After you added a plugin, you need to restart the hugo server to render properly.

## Default Parameters

1. `Logo` field is for your site logo, you can set a default logo for your site, give here the logo directory.
1. `description` field is for your default meta description, it will show on your homepage and other page that have not any meta description on this page front-matter.
1. `author` is for site author name.
1. Contact info has some filed to show your contact information in footer and contact page.
1. `contact_form_action` is for contact form. it works with [formspree](https://formspree.io/).
1. `google_analitycs_id` is to turn on google analytics on your site, give your won analytics ID here.
1. `preloader` is for site preloader, you can enable or disable preloader by enable = true or false, then if you want any image, logo, or animation in preloader then give the location in `preloader =`, like `preloader = images/preloader.gif` or if you don’t want any logo or image then leave the preloader field empty, then it will show a white screen when every component is loading.
1. `navigation_button` is for main navigation button, you can enable or disable it.
1. `subscription` is for user subscription, give your won subscription form action url in `mailchimp_form_action` field, and your form name in `mailchimp_form_name` field. You can get your action url and form name from [here](https://us4.admin.mailchimp.com/campaigns/#/create-campaign/explore/form) (after login or signup).
1. `map` field is for google map , replace your won gmap API key with `gmap_api`. `map_latitude` and `map_longitude` field is for your google map location. you can find this here [http://maps.google.com](http://maps.google.com/) `map_marker` is for your map pointer, you can set your own map pointer that you want to show, maintain the png image size with ( 46\*58) px.
1. `social` is for footer social icon. it’s a loop. and we use font awesome 4.7.0: <https://fontawesome.com/v4.7.0/icons/> for the icon.
1. `Language` is for multilingual content. we used two language here. you can add more language following this example content.
