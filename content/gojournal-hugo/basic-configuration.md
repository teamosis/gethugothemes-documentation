---
title: 'Basic Configuration'
date: '2020-05-14T01:13:18-03:00'
weight: 5
draft: false
---
In this root folder you will find a file called `config.toml` open this file in any text editor or IDM.

If your theme is not launched in your localhost, then check the `theme` name is correct in config.toml file. Then run `hugo server` command again.

Default configuration
---------------------

1. At the very top, you will see a `baseURL` field for your site URL. Give your site URL here.
2. `Title` is for your site title.
3. Then the `Theme` field that you are already declared.
4. `SummaryLeangth` is for post excerpt limit. you can set your post excerpt length as you want to show.
5. `disqusShortname` is for activate comment section on blog page. get your disqus short name from [here](https://disqus.com/).
6. `DefaultContentLanguage` field is for your site default language, which will load first with your site load.
7. `disableLanguages` field is for disable languages, if you don’t want to show one or more then one you can add the language name here, it will disabled those languages from your site. example   
  `disableLanguages = ["fr"]` it will desabled french language from your site.

Plugins
-------

You can add third party plugins from here very easily, We create a loop for plugins, you will see two plugins loop here, first one is for `css` and last one is for `js`. just copy a loop item that you need and paste it in the bottom of the loop. and link correctly, after added a plugins, you maybe need to close the hugo server and run it again for rendered correctly.

Default Parameters
------------------

1. `Logo` field is for your site logo, you can set a default logo for your site, just give here the logo directory.
2. `description` field is for your default meta description, it will show on your homepage and other pages that have not any meta description on this page front-matter.
3. `author` is for the site author name.
4. `contact_form_action` is for the contact form. it works with [formspree](https://formspree.io/).
5. `google_analitycs_id` is for turn on google analytics on your site, give your won analytics ID here.
6. `Sidebar` is for sidebar widgets, it has 3 values, (left,right,false) . if you set the false value, then it will not shown.
7. `preloader` is for site preloader, you can enable or disable preloader by enable = true or false, then if you want any image, logo, or animation in preloader then give the location in `preloader = `, like `preloader = images/preloader.gif` or if you don’t want any logo or image then leave the preloader field empty, then it will show just a white screen when every component is loading. that’s simple.
8. `subscription` is for user subscription, give your won subscription form action url in `mailchimp_form_action` field, and your form name in `mailchimp_form_name` field. You can get your action url and form name from [here](https://us4.admin.mailchimp.com/campaigns/#/create-campaign/explore/form) (after login or signup).
9. `promotion` is for sidebar promotional image with a link. you can disable it if you don’t want it.
10. `instafeed` can be disabled if you don’t need. Then give your user id and access token to work it perfectly.
11. `social` is for social icon. you can choose more icon from [here](https://themify.me/themify-icons)
12. `Language` is for multilingual content. we used two language here. you can add more language following this example content.