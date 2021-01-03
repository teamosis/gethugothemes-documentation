---
title: Configuration
date: 2021-01-03T09:00:00+07:00
weight: 2
---

In your sites root folder you will find a file called `config.toml`. Open this file with your text editor or IDE.

In this template we use [themify icon](https://themify.me/themify-icons) pack, you can choose your necessary icon from [here](https://themify.me/themify-icons).

## Sitewide configuration

{{< contentblocklist "configsidewide/" "baseURL" "title" "theme" "paginate" "summaryLength" "disqusShortname" >}}

## Plugins

{{< contentblock "config/plugins" >}}

## Menu Configuration

The configuration of the header menu can be found in the language section. This hands you the ability to create a menu per configured language.

```toml
[[Languages.en.menu.main]]
name = "Contact"
url = "/contact"
weight = 1

[[Languages.fr.menu.main]]
name = "Contacter"
url = "/contacter"
weight = 1
```

* `[[languages.CODE.menu.main]]` is the main menu loop, you can add your navigation item by copy and pasting this line. Exchange the `CODE` part with the language you want to add this menu item to.
* `name` attribute is for navigation item name.
* `url` is for the page url, just give the page name here, it will automatically add the base URL from your site. like if you want to give the about page url here, just type `about` .
* `weight` is for your navigation sorting, the smaller number weight will show first.

To enable sub menues you have to add `hasChildren = true` to top level menu items and `parent = "Parent Menu Name"` to each subitem.

```toml
[[Languages.en.menu.main]]
weight = 5
name = "Pages"
hasChildren = true

  [[Languages.en.menu.main]]
  parent = "Pages"
  name = "Gallery"
  url = "gallery"
```

This theme comes with two configurable menus:

```toml
[[Languages.en.menu.main]]
[[Languages.en.menu.footer]]
```

## Parameter Configuration

Most parameters in the `[params]` section of your configuration are commented. You can change the basic setup of the theme and add information or enable/disable features.
