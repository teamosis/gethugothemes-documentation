---
title: 'Configuration'
date: 2020-12-18T10:00:00+07:00
weight: 2
---

In the root folder you will find a file called `config.toml` open this file in any text editor or IDE.

If your theme is not launched in your localhost, then check the `theme` name is correct in config.toml file. Then run `hugo server` command again.

### Sitewide configuration

1. At the very top you will see a `baseURL` field for your site URL. Add your sites URL here.
1. The `languageCode` defines which language your site is written in (or which is the main language, if you have a multilingual website)
1. The `summaryLength` decides how many words are in excerpts of your posts when they are displayed as preview.
1. `theme` sets up the used theme ("kross-hugo")
1. `title` is for your site title.

### Plugin Configuration

You can add third party plugins from here very easily, We create a loop for plugins, you will see two plugins loop here, first one is for `css` and last one is for `js`. just copy a loop item that you need and paste it in the bottom of the loop. and link correctly, after added a plugins, you maybe need to close the hugo server and run it again for rendered correctly.

### Menu Configuration

1. `[[menu.main]]` is the main loop, you can add your navigation item by copy and paste this line.
1. `name` attribute is for navigation item name.
1. `URL` is for the page url, just give the page name here, it will automatically add the base URL from your site. like if you want to give the about page url here, just type `about` .
1. `weight` is for your navigation sorting, the smaller number weight will show first.

### Parameter Configuration

1. `description` field is for your default meta description, it will show on your homepage and other page that have not any meta description on this page front-matter.
1. `author` is for site author name.
1. `contact_form_action` is your contact form action. it works with https://formspree.io
1. `copyright` is your site copyright.
