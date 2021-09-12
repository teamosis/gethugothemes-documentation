---
title: 'Basic Configuration'
date: '2020-05-10T02:54:59-03:00'
weight: 4
draft: false
---

Here is the default configuration and basic parameters for your website. You can change those as per your requirements.

## Default configuration
In this project folder, you will find a file called `config.toml`. Open this file in any text editor or IDE.

{{< notice note >}}
For maintaining it from forestry, you can find it at the bottom of the left sidebar. The file called **Configuration**
{{< /notice >}}

{{< contentblocklist "default-config/" "baseURL" "languageCode" "title" "theme" "summaryLength" "paginate" "disqusShortname" "googleAnalytics" "disableLanguages">}}


## Default Parameters
In this project folder, you will find a file called `config/_default/params.toml`. Open this file in any text editor or IDE.

{{< notice note >}}
For maintaining it from forestry, you can find it at the bottom of the left sidebar. The file called **Parameters**
{{< /notice >}}

{{< contentblocklist "default-params/" "favicon" "logo"  "description" "author" "contact_form_action"  "search" "mainSections" "subscription"  "preloader" "social-fa" >}}


11. **logo_height**: define your logo height for perfect fit.
12. **menu_align**: You can set it `left`, `right`, or `center`. 
13. **sidebar** has 3 different values, choose your favorite on from left, right or false. if you choose false, it will no longer visible.
14. **post_layout**: You have two different value to choose for your post layout. you can choose `list` to see list view, or you can select `grig` for grid view.
15. **instafeed**: You can set the value to `false` if you don't want to show it. We provide some static image with the theme, but whenever you give the `access token` it will automatically show up the original image from your instagram.
16. **cookies**: you can set cookie consent messege on and set expiry days from here.
17. **widgets**: All sidebar widgets are customizable. Here is the available widgets that we provided with the theme `search`, `categories`, `tags`, and  `social`.