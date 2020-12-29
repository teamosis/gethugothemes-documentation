---
title: Configuration
date: 2020-12-18T10:00:00+07:00
weight: 2
---

In your sites root folder you will find a file called `config.toml`. Open this file with your text editor or IDE.

## Sitewide configuration

* At the very top you will see a `baseURL` field for your site URL. Add your sites URL here.
* The `languageCode` defines which language your site is written in (or which is the main language, if you have a multilingual website)
* The `summaryLength` decides how many words are in excerpts of your posts when they are displayed as preview.
* `theme` sets up the used theme. For the Kross Hugo Theme this should be "kross-hugo". If you renamed the folder in `themes` to something else you need to add the new folder name.
* `title` is for your site's title.

## Plugin Configuration

You can add third party plugins from here very easily, We create a loop for plugins, you will see two plugins loop here, first one is for `css` and last one is for `js`. just copy a loop item that you need and paste it in the bottom of the loop. and link correctly, after added a plugins, you maybe need to close the hugo server and run it again for rendered correctly.

## Menu Configuration

* `[[menu.main]]` is the main loop, you can add your navigation item by copy and paste this line.
* `name` attribute is for navigation item name.
* `URL` is for the page url, just give the page name here, it will automatically add the base URL from your site. like if you want to give the about page url here, just type `about` .
* `weight` is for your navigation sorting, the smaller number weight will show first.

## Parameter Configuration

Most parameters in `config.toml` are commented. You can change the basic setup of the theme and add information or enable/disable features. 

* `description` field is for your default meta description, it will show on your homepage and other page that have not any meta description on this page front-matter.
* `author` is for site author name.
* `contact_form_action` is your contact form action. it works with https://formspree.io
* `copyright` is your site copyright.
