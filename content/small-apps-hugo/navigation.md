---
title: Navigation
date: '2019-07-28T04:25:15-03:00'
weight: 3
draft: false
---
Main navigation
---------------

1. `[[menu.main]]` is the main loop, you can add your navigation item by copy and paste this line.
2. `name` attribute is for navigation item name.
3. `URL` is for the page url, just give the page name here, it will automatically add the base URL from your site. like if you want to give the about page url here, just type `about` .
4. `weight` is for your navigation sorting, the smaller number weight will show first.
5. For `dropdown menu` you need to add another attribute called `hasChildren = true` , and remove `URL`. then give 1 tab space for understanding hugo that is a children menu item. and paste this `[[menu.main]]` again, then give the `parent =` attribute here. parent name should be the dropdown item name, then give the page `name` and `URL`.

Footer Navigation
-----------------

Footer navigation is also follow the same rule that use main navigation.