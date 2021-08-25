---
title: 'Basic Configuration'
date: '2019-09-26T07:47:50-03:00'
weight: 4
draft: false
---
In this root folder you will find a file called `config.toml` open this file in any text editor or IDE.

If your theme is not launched in your localhost, then check the `theme` name is correct in configure.toml file. Then run `hugo server` command again.

## Sitewide configuration

{{< contentblocklist "default-config/" "baseURL" "languageCode" "theme" "title" "summaryLength" "paginate" >}}

Plugins
-------

You can add third party plugins from here very easily, We create a loop for plugins, you will see two plugins loop here, first one is for `css` and last one is for `js`. just copy a loop item that you need and paste it in the bottom of the loop. and link correctly, after added a plugins, you maybe need to close the hugo server and run it again for rendered correctly.

Default Parameters
------------------

1. `Logo` field is for your site logo, you can set a default logo for your site, just give here the logo directory.
2. <font color="#23282d" face="Menlo, Consolas, monaco, monospace"><span style="background-color: rgb(232, 234, 235);">Home</span></font> is for home in your navigation.
3. `description` field is for your default meta description, it will show on your homepage and other page that have not any meta description on this page front-matter.
4. `author` is for site author name.
5. `gmapAPI` field is for google map API key, replace your won gmap API key with it.
6. `mapLatitude` and `mapLongitude` field is for your google map location. you can find this here [http://maps.google.com](http://maps.google.com/)
7. `mapMarker` is for your map pointer, you can set your won map pointer that you want to shaow, just maintain the png image size with ( 62\*85) px.
8. `googleAnalitycsID` is for turn on google analytics on your site, give your won analytics ID here.
9. `preloader` is for site preloader, it’s default value is true, but if you don’t want it, you can `false` it.
