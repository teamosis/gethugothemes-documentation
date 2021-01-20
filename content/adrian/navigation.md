---
title: Navigation
date: '2019-12-02T08:15:02-03:00'
weight: 4
---

## Main navigation

1. `[[menu.main]]` is the main loop, you can add your navigation item by copy and paste this line.
1. `name` attribute is for navigation item name.
1. `URL` is for the page url, give the page name here, it will automatically add the base URL from your site. like if you want to give the about page url here, type `about`.
1. `weight` is for your navigation sorting, the smaller number weight will show first.
1. For `dropdown menu` you need to add another attribute called `hasChildren = true` , and remove `URL`. then give 1 tab space for understanding hugo that is a children menu item. and paste this `[[menu.main]]` again, then give the `parent =` attribute here. parent name should be the dropdown item name, then give the page `name` and `URL`.
1. `navBtn` is for navigation button that we provided in this theme, if you don’t want it, you can turn off this, you will see `navBtn` bottom of the main navigation, you can set `enable = false` for hide this button, true is the default value, you can set button label and url here. this url is also like the navigation url, you need to give the page name.
