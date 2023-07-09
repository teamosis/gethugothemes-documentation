---
title: "Configuration"
date: 2020-12-30T13:00:00+07:00
weight: 2
---

In your sites root folder you will find a file called `config.toml`. Open this file with your text editor or IDE.

## Sitewide configuration

{{< contentblocklist "default-config/" "baseURL" "title" "theme" "summaryLength" "googleAnalytics" >}}

## Plugin Configuration

{{< contentblock "plugins" "PLUGINSDIR:config.toml" >}}

## Menu Configuration

* `[[menu.main]]` is the main menu loop, you can add your navigation item by copy and pasting this line.
* `name` attribute is for navigation item name.
* `URL` is for the page url, just give the page name here, it will automatically add the base URL from your site. like if you want to give the about page url here, just type `about` .
* `weight` is for your navigation sorting, the smaller number weight will show first.

This theme comes with two configurable menus:

```toml
[[menu.main]]
[[menu.footer]]
```

## Parameter Configuration

Most parameters in the `[params]` section of your configuration are commented. You can change the basic setup of the theme and add information or enable/disable features.
