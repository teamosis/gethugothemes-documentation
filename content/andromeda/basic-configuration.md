---
title: 'Basic Configuration'
date: '2019-12-02T08:14:55-03:00'
weight: 3
draft: false
---
In this root folder you will find a file called `config.toml` open this file in any text editor or IDE.

If your theme is not launched in your localhost, then check the `theme` name is correct in `config.toml` file. Then run `hugo server` command again.

## Sitewide configuration

{{< contentblocklist "configsidewide/" "baseURL" "languageCode" "title" "theme" "summaryLength" "paginate" "disqusShortname" >}}

Plugins
-------

You will found plugins in `config.toml` file. Remember that, there is 2 config file. 1 is under the `config/_default` folder, but you need to open the other one, whice is independent. You can add third party plugins from here very easily, We create a loop for plugins, you will see two plugins loop here, first one is for `css` and last one is for `js`. just copy a loop item that you need and paste it in the bottom of the loop. and link correctly, after added a plugins, you maybe need to close the hugo server and run it again for rendered correctly.

Default Parameters
------------------

1. `Favicon` field is for your site favicon, just give here the favicon directory.
2. `Logo` field is for your site logo, you can set a default logo for your site, just give here the logo directory.
3. `description` field is for your default meta description, it will show on your homepage and other page that have not any meta description on this page front-matter.
4. `author` is for site author name.
5. Contact info has some filed to show your contact information in footer and contact page.
6. `contact_form_action` is for contact form. it work’s with [formspree](https://formspree.io/).
7. `career_form_action` is for career form. it work’s with [formspree](https://formspree.io/).

8. `mainSections`: If you change the main section name from `blog` to something else, then change the mainSection name to your something else name. It's an array, so you can add more section to show.
9. `preloader` is for site preloader, you can enable or disable preloader by enable = true or false, then if you want any image, logo, or animation in preloader then give the location in `preloader = `, like `preloader = images/preloader.gif` or if you don’t want any logo or image then leave the preloader field empty, then it will show just a white screen when every component is loading. that’s simple.
10. `social` is for social icons. you can choose more icons from here