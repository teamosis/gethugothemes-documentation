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
3. `URL` is for the page URL. Just give the page name here. It will automatically add the base URL from your site. If you want to put the about page URL here, type `about`.
4. `weight` is for your navigation sorting; The smaller number weight will show first.
5. For `dropdown menu`, you need to add another attribute called `hasChildren = true`. And remove `URL`. Then give one tab space for understanding Hugo that is a children's menu item. And paste this `[[main]]` again, then put the `parent =` attribute here. Parent name should be the dropdown item name, then give the page `name` and `URL` attributes.


Footer navigation
-----------------
Footer navigation also follows the same rule that uses main navigation. Just footer menus don't support dropdown menus.