---
title: 'Basic Configuration'
date: '2019-11-10T08:06:55-03:00'
weight: 4
draft: false
---
In this root folder you will find a file called `config.toml` open this file in any text editor or IDM.

If your theme is not launched in your localhost, then check the `theme` name is correct in `config.toml` file. Then run `hugo server` command again.

Default configuration
---------------------

1. At the very top you will see a `baseURL` field for your site URL. Give your site URL here.
2. `LanguageCode` field is for your site language.
3. `Title` field is for the site title.
4. Then the `Theme` field that you are already declared.
5. `SummaryLeangth` is for post excerpt limit. you can set your post excerpt length as you want to show.
6. `Paginate` field is for blog list page pagination, it will show the item in one page that number you are given here.
7. `disqusShortname` is for post comments, you can get your shortname [here](https://disqus.com/)

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
7. `mapMarker` is for your map pointer, you can set your won map pointer that you want to shaow, just maintain the png image size with ( 45\*45) px.
8. `googleAnalitycsID` is for turn on google analytics on your site, give your won analytics ID here.
9. `Contact Information` is for contact page and footer. you can set your phone, email and location here.
10. `copyright` is for copyright text in the very bottom of the page.
11. `preloader` is for site preloader, you can enable or disable preloader by enable = true or false, then if you want any image, logo, or animation in preloader then give the location in `preloader = `, like `preloader = images/preloader.gif` or if you don’t want any logo or image then leave the preloader field empty, then it will show just a white screen when every component is loading. that’s simple.
12. `Rating` is for product rating, you can enable or disable it. you need `websiteID` and `publicKey` for enable this feature. and you can get those keys from here : https://rating-widget.com/