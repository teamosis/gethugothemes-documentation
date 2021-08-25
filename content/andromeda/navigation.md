---
title: Navigation
date: '2019-12-02T08:15:02-03:00'
weight: 5
draft: false
---

Customizing navigation is easy enoguh. You need to open the `config/_defaults/menus.**.toml` file and add the following lines:

Main navigation
---------------

1. `[[main]]` is the main loop; You can add your navigation item by copying and pasting this line.
2. `name` attribute is for menu item text .
3. `URL` is for the page URL. If you want to put the about page URL here, type `about`. You can also use external url by putting the url in this attribute . ex `url = "https://gethugothemes.com"`
4. `weight` is for your navigation sorting; The smaller number weight will show first. You can switch menu items by changing the weight value .
5. For **dropdown menu**, you need to add another attribute called `hasChildren = true`. And remove `URL`. Then give one tab space . And repeat `[[main]]` again, then put the `parent =` attribute in dropdown menu item . Parent name should be same as dropdown item name. Also update `name` and `URL` attributes.


Footer navigation
-----------------
Footer navigation settings are similar to main navigation . Remember that footer menus does not support dropdown feature.
