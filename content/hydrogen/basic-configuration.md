---
title: 'Basic Configuration'
date: '2020-05-10T02:54:59-03:00'
weight: 4
draft: false
---

Here is the default configuration and basic parameters for your website. You can change those as per your requirements.

## Default configuration
In this project folder, you will find a file called `config/_default/config.toml`. Open this file in any text editor or IDE.

{{< notice note >}}
For maintaining it from forestry, you can find it at the bottom of the left sidebar. The file called **Configuration**
{{< /notice >}}

{{< contentblocklist "default-config/" "baseURL" "languageCode" "title" "theme" "summaryLength" "paginate" "disqusShortname" "googleAnalytics" "disableLanguages">}}


## Default Parameters
In this project folder, you will find a file called `config/_default/params.toml`. Open this file in any text editor or IDE.

{{< notice note >}}
For maintaining it from forestry, you can find it at the bottom of the left sidebar. The file called **Parameters**
{{< /notice >}}

{{< contentblocklist "default-params/" "favicon" "logo" "logo_width" "logo_text" "description" "author" "image" "contact_form_action" "mainSections" "contact_info" "search" "preloader" "subscription" "social-la" >}}


15. **featured_post**: At the homepage, you can see a section at top, which is contain 3 types of post, This is the featured post section. If you don't need it, you can set the value to `false`.

16. **post_layout**: You have two different value to choose for your post layout. you can choose `list` to see list view, or you can select `grig` for grid view.

17. **cookies**: you can set cookie consent messege on and set expiry days from here.

18. **snipcart_api** is for active the snipcart, go to [snipcart](https://snipcart.com/) , create your account and generate a snipcart public API key. and replace with it.

19. **sidebar** has 3 different values, choose your favorite on from left, right or false. if you choose false, it will no longer visible.

20. **promotion** is a sidebar widget, you can change the content and link from here.

21. **widgets**: All sidebar widgets are customizable. Here is the available widgets that we provided with the theme `search`,`about-me`,`authors`,`categories`,`tags`,`recent-post`,`social`,`promotion`,`subscription` 