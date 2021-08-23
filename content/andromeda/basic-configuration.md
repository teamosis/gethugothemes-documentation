---
title: 'Basic Configuration'
date: '2019-12-02T08:14:55-03:00'
weight: 3
draft: false
---
In this root folder you will find a file called `config.toml` open this file in any text editor or IDE.

If your theme is not launched in your localhost, then check the `theme` name is correct in `config.toml` file. Then run `hugo server` command again.

## Default configuration

{{< contentblocklist "configsidewide/" "baseURL" "languageCode" "title" "theme" "summaryLength" "paginate" "disqusShortname" >}}


Default Parameters
------------------

1. `Favicon` field is for your site favicon. Just give here the favicon directory.
2. `Logo` field is for your site logo. You can set a default logo for your site. Just give here the logo directory.
3. `description` field is for your default meta description. It will show on your homepage and other pages that have no meta description on this page front-matter.
4. `author` is for the site author name.
5. Contact info has some filed to show your contact information in the footer and contact page.
6. `contact_form_action` is for contact form. it work’s with [formspree](https://formspree.io/).
7. `career_form_action` is for career form. it work’s with [formspree](https://formspree.io/).

8. `mainSections`: If you change the main section name from `blog` to something else, then change the `mainSection` name to your something else name. It's an array, so you can add more sections to show.
9. `preloader` is for site preloader. You can enable or disable preloader by `enable = true` or false, then if you want any image, logo, or animation in the preloader, give the location in `preloader = `, like `preloader = images/preloader.gif` or if you don’t want any logo or image then leave the preloader field empty, then it will show just a white screen when every component is loading.
10. `social` is for social icons. you can choose more icons from [here](https://icons8.com/line-awesome)
