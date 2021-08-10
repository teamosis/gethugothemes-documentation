---
title: Navigation
date: '2019-12-02T08:15:02-03:00'
weight: 4
draft: false
---

Customizing navigation is easy enoguh. You need to open the `config/_defaults/menus.**.toml` file and add the following lines:

Main navigation
---------------

1. `[[main]]` is the main loop; You can add your navigation item by copying and pasting this line.
2. `name` attribute is for navigation item name.
3. `URL` is for the page url; Just give the page name here, it will automatically add the base URL from your site. like if you want to give the about page url here, just type `about` .
4. `weight` is for your navigation sorting; The smaller number weight will show first.
5. For `dropdown menu` you need to add another attribute called `hasChildren = true` , and remove `URL`. then give 1 tab space for understanding hugo that is a children menu item. and paste this `[[main]]` again, then give the `parent =` attribute here. parent name should be the dropdown item name, then give the page `name` and `URL`.


Footer navigation
-----------------
Footer navigation is also follow the same rule that use main navigation. Just footer menus doesn't support dropdown menu.