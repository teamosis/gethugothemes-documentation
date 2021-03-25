---
title: 'Basic Configuration'
date: '2020-05-10T02:54:59-03:00'
weight: 5
draft: false
---
In this root folder you will find a file called `config.toml` open this file in any text editor or IDE.

If your theme is not launched in your localhost, then check the `theme` name is correct in config.toml file. Then run `hugo server` command again.

## Sitewide configuration

{{< contentblocklist "configsidewide/" "baseURL" "theme" "title" "summaryLength" "defaultContentLanguage" "disableLanguages" "disqusShortname" >}}

Plugins
-------

You can add third party plugins from here very easily, We create a loop for plugins, you will see two plugins loop here, first one is for `css` and last one is for `js`. just copy a loop item that you need and paste it in the bottom of the loop. and link correctly, after added a plugins, you maybe need to close the hugo server and run it again for rendered correctly.

Default Parameters
------------------

1. `Logo` field is for your site logo, you can set a default logo for your site, just give here the logo directory.
2. `description` field is for your default meta description, it will show on your homepage and other page that have not any meta description on this page front-matter.
3. `author` is for site author name.
4. Contact info has some filed to show your contact information in footer and contact page.
5. `contact_form_action` is for contact form. it work’s with [formspree](https://formspree.io/).
6. `google_analitycs_id` is for turn on google analytics on your site, give your won analytics ID here.
7. `search` can be disabled, if it has `false` value.
8. `sidebar` has 3 different values, choose your favorite on from left, right or false. if you choose false, it will no longer visible.
9. `layout` has tow value, full or list. it changes the homepage style.
10. `preloader` is for site preloader, you can enable or disable preloader by enable = true or false, then if you want any image, logo, or animation in preloader then give the location in `preloader = `, like `preloader = images/preloader.gif` or if you don’t want any logo or image then leave the preloader field empty, then it will show just a white screen when every component is loading. that’s simple.
11. `social` is for social icons. you can choose more icons from here
12. Language is for multilingual content. we used two languages here. you can add more language following this example content.