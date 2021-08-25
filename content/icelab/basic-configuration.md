---
title: 'Basic Configuration'
date: '2020-05-14T05:49:45-03:00'
weight: 5
draft: false
---
In this root folder you will find a file called `config.toml` open this file in any text editor or IDE.

If your theme is not launched in your localhost, then check the `theme` name is correct in config.toml file. Then run `hugo server` command again.

## Sitewide configuration

{{< contentblocklist "default-config/" "baseURL" "summaryLength" "theme" "title" >}}

Plugins
-------

You can add third party plugins from here very easily, We create a loop for plugins, you will see two plugins loop here, first one is for `css` and last one is for `js`. just copy a loop item that you need and paste it in the bottom of the loop. and link correctly, after added a plugins, you maybe need to close the hugo server and run it again for rendered correctly.

Default Parameters
------------------

1. `Logo` field is for your site logo, you can set a default logo for your site, just give here the logo directory.
2. `description` field is for your default meta description, it will show on your homepage and other page that have not any meta description on this page front-matter.
3. `author` is for site author name.
4. `map` is for configure your google map.
5. `contact_form_action` is for contact form. it work’s with [formspree](https://formspree.io/).
6. `social` is for social icons. you can choose more icons from here
