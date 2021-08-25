---
title: 'Basic Configuration'
date: '2020-05-14T05:48:21-03:00'
weight: 5
draft: false
---
In this root folder you will find a file called `config.toml` open this file in any text editor or IDE.

If your theme is not launched in your localhost, then check the `theme` name is correct in config.toml file. Then run `hugo server` command again.

## Sitewide configuration

{{< contentblocklist "default-config/" "baseURL" "theme" "title" "paginate" "disqusShortname" >}}

Plugins
-------

You can add third party plugins from here very easily, We create a loop for plugins, you will see two plugins loop here, first one is for `css` and last one is for `js`. just copy a loop item that you need and paste it in the bottom of the loop. and link correctly, after added a plugins, you maybe need to close the hugo server and run it again for rendered correctly.

Default Parameters
------------------

1. `description` field is for your default meta description, it will show on your homepage and other page that have not any meta description on this page front-matter.
2. `author` is for site author name.
3. `contact_form_action` is your contact form action. it works with https://formspree.io
4. `copyright` is your site copyright.
