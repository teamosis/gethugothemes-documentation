---
title: Navigation
date: '2019-07-28T04:24:58-03:00'
weight: 4
---

This template supports multi-language, we provide 2 language here, that’s why you will see 2 navigation here. First one is in `[Language.en.menu]` that is for English language. and other one is in `[Language.fr.menu]` that is for the french language. In this theme English is the default language. All the navigation are follow the same rules.

In this file, we already provide a navigation, you just need to modified with your won page name and links,

## Setup

1. `[[Languages.en.menu.nav]]` is the main loop, you can add your navigation item by copy and paste this line.
1. `name` attribute is for navigation item name.
1. `URL` is for the page url, just give the page name here, it will automatically add the base URL from your site. like if you want to give the about page url here, just type `about` . this is for the default language URL. For the other languages, you must add the language name before the page name, like for french language, you need to add `fr/` before the page url. example : `fr/about`
1. `weight` is for your navigation sorting, the smaller number weight will show first.
