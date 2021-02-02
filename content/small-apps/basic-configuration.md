---
title: 'Basic Configuration'
date: '2019-07-28T04:23:27-03:00'
weight: 4
draft: false
---
In this root folder you will find a file called `configure.toml` open this file in any text editor or IDE.

If your theme is not launched in your localhost, then check the `theme` name is correct in configure.toml file. Then run `hugo server` command again.

## Sitewide configuration

{{< contentblocklist "configsidewide/" "baseURL" "languageCode" "theme" "title" "summaryLength" "paginate" >}}

Plugins
-------

You can add third party plugins from here very easily, We create a loop for plugins, you will see two plugins loop here, first one is for `css` and last one is for `js`. just copy a loop item that you need and paste it in the bottom of the loop. and link correctly, after added a plugins, you maybe need to close the hugo server and run it again for rendered correctly.

Default Parameters
------------------

1. `Logo` field is for your site logo, you can set a default logo for your site, just give here the logo directory.
2. `LogoAlt` is for footer logo, it’s in the dark background, that’s why you need a light color logo.
3. <font color="#23282d" face="Menlo, Consolas, monaco, monospace"><span style="background-color: rgb(232, 234, 235);">Home</span></font> is for home in your navigation.
4. `description` field is for your default meta description, it will show on your homepage and other page that have not any meta description on this page front-matter.
5. `author` is for site author name.
6. `googleAnalitycsID` is for turn on google analytics on your site, give your won analytics ID here.
7. `preloader` is for site preloader, it’s default value is true, but if you don’t want it, you can `false` it.
