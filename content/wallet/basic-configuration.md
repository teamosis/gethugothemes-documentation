---
title: 'Basic Configuration'
date: '2020-05-10T02:54:59-03:00'
weight: 4
draft: false
---

Here is the default configuration and basic parameters for your website. You can change those as per your requirements.

## Default configuration

In this project folder, you will find a file called `config/_default/config.toml`. Open this file in any text editor or IDE.

{{< contentblocklist "default-config/" "baseURL" "languageCode" "title" "theme" "summaryLength" "paginate" "disqusShortname" "googleAnalytics" "disableLanguages" >}}

## Default Parameters

In this project folder, you will find a file called `config/_default/params.toml`. Open this file in any text editor or IDE.

{{< contentblocklist "default-params/" "favicon" "logo" "logo_width" "logo_text" "description" "author" "image" "contact_info" "contact_form_action"  "subscription" "preloader" "social-fa" >}}

13. **custom_script**: You can add any third party scirpt here, like any beacon service. keep in mind, you need to replace all double quote `"` with single quote `'` in the script.

14. **top_header** is the top section. above the navigation bar. you can `false` it for hide it.

15. **cookies** you can set cookie consent messege on and set expiry days from here.

16. **widgets**  All sidebar widgets are customizable. Here is the available widgets that we provided with the theme `search`, `categories`, `tags`, and  `social`.

17. **navigation_button_bordered** is for border navigation button, you can enable or disable it.

18. **navigation_button_solid** is for solid navigation button, you can enable or disable it.
