---
title: Navigation
date: '2019-07-24T02:40:40-03:00'
weight: 4
---

## Top Header

Top header is the top section of the template, you can configure it from the `config.toml` file. If you don’t need it, you can `false` it.

## Main navigation

1. `[[menu.main]]` is the main loop, you can add your navigation item by copy and paste this line.
1. `name` attribute is for navigation item name.
1. `URL` is for the page url, give the page name here, it will automatically add the base URL from your site. like if you want to give the about page url here, type `about` .
1. `weight` is for your navigation sorting, the smaller number weight will show first.
1. For `dropdown menu` you need to add another attribute called `hasChildren = true` , and remove `URL`. then give 1 tab space for understanding hugo that is a children menu item. and paste this `[[menu.main]]` again, then give the `parent =` attribute here. parent name should be the dropdown item name, then give the page `name` and `URL`.
1. `navigation_button` is for main navigation button, you can enable or disable it.

## Footer Navigation

Footer navigation is also follow the same rule that use main navigation.
