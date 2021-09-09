---
title: 'Basic Configuration'
date: '2019-07-28T04:23:17-03:00'
weight: 4
draft: false
---

Here is the default configuration and basic parameters for your website. You can change those as per your requirements.

## Default configuration
In this project folder, you will find a file called `config/_default/config.toml`. Open this file in any text editor or IDE.

{{< notice note >}}
For maintaining it from forestry, you can find it at the bottom of the left sidebar. The file called **Configuration**
{{< /notice >}}

{{< contentblocklist "default-config/" "baseURL" "disableLanguages" "title" "theme" "summaryLength" "paginate" "disqusShortname" "googleAnalytics" >}}


## Default Parameters
In this project folder, you will find a file called `config/_default/params.toml`. Open this file in any text editor or IDE.

{{< notice note >}}
For maintaining it from forestry, you can find it at the bottom of the left sidebar. The file called **Parameters**
{{< /notice >}}

{{< contentblocklist "default-params/" "favicon" "logo"  "description" "author" "image" "contact_form_action" "mainSections" "contact_info" "preloader" "social-fa" >}}

11. **google_analitycs_id** is to turn on google analytics on your site, give your won analytics ID here.
12. **navigation_button** is for main navigation button, you can enable or disable it.
13. **subscription** is for user subscription, give your won subscription form action url in `mailchimp_form_action` field, and your form name in `mailchimp_form_name` field. You can get your action url and form name from [here](https://us4.admin.mailchimp.com/campaigns/#/create-campaign/explore/form) (after login or signup).
14. **map** field is for google map , replace your won gmap API key with `gmap_api`. `map_latitude` and `map_longitude` field is for your google map location. you can find this here [http://maps.google.com](http://maps.google.com/) `map_marker` is for your map pointer, you can set your own map pointer that you want to show, maintain the png image size with ( 46\*58) px.

