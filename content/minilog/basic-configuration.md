---
title: 'Basic Configuration'
date: '2019-12-02T08:14:55-03:00'
weight: 4
draft: false
---

Here is the default configuration and basic parameters for your website. You can change those as per your requirements.

## Default configuration
In this project folder, you will find a file called `config/_default/config.toml`. Open this file in any text editor or IDE.

{{< notice note >}}
For maintaining it from forestry, you can find it at the bottom of the left sidebar. The file called **Configuration**
{{< /notice >}}

{{< contentblocklist "default-config/" "baseURL" "languageCode" "title" "theme" "summaryLength" "timeZone" "paginate" "disqusShortname" "googleAnalytics" "disqusShortname" >}}


## Default Parameters
In this project folder, you will find a file called `config/_default/params.toml`. Open this file in any text editor or IDE.

{{< notice note >}}
For maintaining it from forestry, you can find it at the bottom of the left sidebar. The file called **Parameters**
{{< /notice >}}

{{< contentblocklist "default-params/" "favicon" "logo" "logo_width" "logo_text" "description" "author" "image" "contact_form_action" "contact_info" "mainSections" "preloader" "subscription" "social-fa" >}}

14. **navigation_button** is for main navigation button, you can enable or disable it.

15. **logo_dark**: It's for dark version.

16. **Search** is for blog post search, you can enable or disable it from here.

17. **cookies**  you can set cookie consent messege on and set expiry days from here.

18. **custom_script** You can add any third party scirpt here, like any beacon service. keep in mind, you need to replace all double quote `"` with single quote `'` in the script.

19. **instafeed**: You can set the value to `false` if you don't want to show it. We provide some static image with the theme, but whenever you give the `access token` it will automatically show up the original image from your instagram.

20. **widgets**: All sidebar widgets are customizable. Here is the available widgets that we provided with the theme `author`, `newsletter`, `categories`, `tags`, and  `social`.

21. **theme_mode** is a option that you can change your site into dark mode and light mode. If you want a dark version then you can change the value to `default_mode = dark` and for light version  `default_mode = light`.