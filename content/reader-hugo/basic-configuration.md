---
title: 'Basic Configuration'
date: '2020-05-10T02:54:59-03:00'
weight: 5
draft: false
---
In this root folder you will find a file called `config.toml` open this file in any text editor or IDE.

If your theme is not launched in your localhost, then check the `theme` name is correct in config.toml file. Then run `hugo server` command again.

Default configuration
---------------------

1. At the very top you will see a `baseURL` field for your site URL. Give your site URL here.
2. `Title` is for your site title.
3. Then the `Theme` field that you are already declared.
4. `SummaryLeangth` is for post excerpt limit. you can set your post excerpt length as you want to show.
5. `disqusShortname` is for activate comment section on blog page. get your disqus short name from [here](https://disqus.com/).
6. `DefaultContentLanguage` field is for your site default language, which will load first with your site load.
7. `disableLanguages` field is for disable languages, if you don’t want to show one or more then one you can add the language name here, it will disabled those languages from your site. example   
  `disableLanguages = ["fr"]` it will desabled french language from your site.
8. `googleAnalytics` field is for your google analytics, place your analytics id here to active it.

Plugins
-------

You can add third party plugins from here very easily, We create a loop for plugins, you will see two plugins loop here, first one is for `css` and last one is for `js`. just copy a loop item that you need and paste it in the bottom of the loop. and link correctly, after added a plugins, you maybe need to close the hugo server and run it again for rendered correctly.

Default Parameters
------------------

1. `Logo` field is for your site logo, you can set a default logo for your site, just give here the logo directory.
2. `logo_width`: define your logo width for perfect fit.
3. `menu_align`: You can set it `left`, `right`, or `center`. 
4. `description` field is for your default meta description, it will show on your homepage and other page that have not any meta description on this page front-matter.
5. `author` is for site author name.
6. Contact info has some filed to show your contact information in footer and contact page.
7. `contact_form_action` is for contact form. it work’s with [formspree](https://formspree.io/).
8. `search` can be disabled, if it has `false` value.
9. `featured_post`: At the homepage, you can see a section at top, which is contain 3 types of post, This is the featured post section. If you don't need it, you can set the value to `false`.
10. `sidebar` has 3 different values, choose your favorite on from left, right or false. if you choose false, it will no longer visible.
11. `main_taxonomy`: You can choose the main taxonomy which is showing at the banner and post card also. Your optional value is `tag` and `category`.
12. `post_layout`: You have three different value to choose for your post layout. 
13. `preloader` is for site preloader, you can enable or disable preloader by enable = true or false, then if you want any image, logo, or animation in preloader then give the location in `preloader = `, like `preloader = images/preloader.gif` or if you don’t want any logo or image then leave the preloader field empty, then it will show just a white screen when every component is loading. that’s simple.
14. `social` is for social icons. you can choose more icons from here
15. Language is for multilingual content. we used two languages here. you can add more language following this example content.
16. `instafeed`: You can set the value to `false` if you don't want to show it. We provide some static image with the theme, but whenever you give the `access token` it will automatically show up the original image from your instagram.
17. `[params.subscription]` is for user subscription database. We used [mailchimp](https://mailchimp.com/) service for our theme development. Replace your own subscription form action URL in `mailchimp_form_action` field, and your form name in `mailchimp_form_name` field. You can get your action URL and form a name from [here](https://us4.admin.mailchimp.com/campaigns/#/create-campaign/explore/form) (after login or signup).
18. `widgets`: All sidebar widgets are customizable. Here is the available widgets that we provided with the theme `search`,`about-me`,`authors`,`categories`,`tags`,`recent-post`,`social`,`promotion`,`subscription` 
19. `promotion` is a sidebar widget, you can change the content and link from here.
20. `about_me` is also a sidebar widget. It's for single author user. You can change the content from here. [this section is under the language, because it could be multilingual]
