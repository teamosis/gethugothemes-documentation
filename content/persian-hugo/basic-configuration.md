---
title: 'Basic Configuration'
date: '2020-06-02T07:23:59-03:00'
weight: 5
draft: false
---
In this root folder you will find a file called `config.toml` open this file in any text editor or IDM.

If your theme is not launched in your localhost, then check the `theme` name is correct in config.toml file. Then run `hugo server` command again.

Default configuration
---------------------

1. At the very top you will see a `baseURL` field for your site URL. Give your site URL here.
2. `Title` is for your site title.
3. Then the `Theme` field that you are already declared.
4. `paginate` is for post pagination, how much you want to show in a page.
5. `disqusShortname` is for activate comment section on blog page. get your disqus short name from [here](https://disqus.com/).

Plugins
-------

You can add third party plugins from here very easily, We create a loop for plugins, you will see two plugins loop here, first one is for `css` and last one is for `js`. just copy a loop item that you need and paste it in the bottom of the loop. and link correctly, after added a plugins, you maybe need to close the hugo server and run it again for rendered correctly.

Default Parameters
------------------

1. `description` field is for your default meta description, it will show on your homepage and other page that have not any meta description on this page front-matter.
2. `author` is for site author name.
3. `contact_form_action` is your contact form action. it works with https://formspree.io
4. `copyright` is your site copyright.