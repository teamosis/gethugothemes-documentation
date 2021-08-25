---
title: 'Basic Configuration'
date: '2020-05-10T02:54:59-03:00'
weight: 5
draft: false
---
In this root folder you will find a file called `config.toml` open this file in any text editor or IDE.

If your theme is not launched in your localhost, then check the `theme` name is correct in config.toml file. Then run `hugo server` command again.

## Sitewide configuration

{{< contentblocklist "default-config/" "baseURL" "theme" "title" "summaryLength" "defaultContentLanguage" "disableLanguages" "disqusShortname" "googleAnalytics" >}}

Plugins
-------
For plugins management, you need to open `config.toml` file. You can add third party plugins from here very easily, We create a loop for plugins, you will see two plugins loop here, first one is for `css` and last one is for `js`. just copy a loop item that you need and paste it in the bottom of the loop. and link correctly, after added a plugins, you maybe need to close the hugo server and run it again for rendered correctly.

Default Parameters
------------------
For Params management, you need to open `config/_default/params.toml` file.
* `logo` field is for your site logo, you can set a default logo for your site, just give here the logo directory.
* `logo_text` : If you don't have any logo, then you can add a text logo by this field.
* `logo_width`: define your logo width for perfect fit.
* `favicon`: set your favicon from here, i.e: "images/favicon.png"
* `description` field is for your default meta description, it will show on your homepage and other page that have not any meta description on this page front-matter.
* `author` is for site author name.
* Contact info has some filed to show your contact information in contact page.
* `contact_form_action` is for contact form. it work’s with [formspree](https://formspree.io/).
* `custom_script`: You can add any third party scirpt here, like any beacon service. keep in mind, you need to replace all double quote `"` with single quote `'` in the script.
* `preloader` is for site preloader, you can enable or disable preloader by enable = true or false, then if you want any image, logo, or animation in preloader then give the location in `preloader = `, like `preloader = images/preloader.gif` or if you don’t want any logo or image then leave the preloader field empty, then it will show just a white screen when every component is loading. that’s simple.
* `social` is for social icons. you can choose more icons from here
15. Language is for multilingual content. we used two languages here. you can add more language following this example content.
* `instafeed`: You can set the value to `false` if you don't want to show it. We provide some static image with the theme, but whenever you give the `access token` it will automatically show up the original image from your instagram.
* `[params.subscription]` is for user subscription database. We used [mailchimp](https://mailchimp.com/) service for our theme development. Replace your own subscription form action URL in `mailchimp_form_action` field, and your form name in `mailchimp_form_name` field. You can get your action URL and form a name from [here](https://us4.admin.mailchimp.com/campaigns/#/create-campaign/explore/form) (after login or signup).
