---
title: "Configuration"
date: 2020-12-21T10:00:00+07:00
weight: 2
---

In your sites root folder you will find a file called `config.toml`. Open this file with your text editor or IDE.

## Sitewide configuration

{{< contentblocklist "configsidewide/" "baseURL" "summaryLength" "theme" "title" "googleAnalytics" >}}

## Plugin Configuration

You can add third party plugins from here very easily, We create a loop for plugins, you will see two plugins loop here, first one is for `css` and last one is for `js`. just copy a loop item that you need and paste it in the bottom of the loop. and link correctly, after added a plugins, you maybe need to close the hugo server and run it again for rendered correctly.

## Menu Configuration

The configuration of the header menu can be found in the language section. This hands you the ability to create a menu per configured language.

```toml
[[Languages.en.menu.main]]
name = "Contact"
url = "/contact"
weight = 1

[[Languages.fr.menu.main]]
name = "Cntacter"
url = "/contacter"
weight = 1
```

* `[[languages.CODE.menu.main]]` is the main menu loop, you can add your navigation item by copy and pasting this line. Exchange the `CODE` part with the language you want to add this menu item to.
* `name` attribute is for navigation item name.
* `url` is for the page url, just give the page name here, it will automatically add the base URL from your site. like if you want to give the about page url here, just type `about` .
* `weight` is for your navigation sorting, the smaller number weight will show first.

This theme comes with two configurable menus:

```toml
[[Languages.en.menu.main]]
[[Languages.en.menu.footer]]
```

## Parameter Configuration

Most parameters in the `[params]` section of your configuration are commented. You can change the basic setup of the theme and add information or enable/disable features.

The code for the `icon` in your social media setup can be found on [this list of brand icons](https://themify.me/themify-icons) and comes from from the Themify icon font. This font is already included. Just select the icon you wish to show and configure it with `icon = "ti-twitter-alt"`.
