---
title: 'Basic Configuration'
date: '2019-12-02T08:14:55-03:00'
weight: 4
draft: false
---

Here is the default configuration and basic parameters for your website. You can change those as per your requirements.

## Default configuration

In this project folder, you will find a file called `config.toml`. Open this file in any text editor or IDE.

{{< contentblocklist "default-config/" "baseURL" "title" "theme" "summaryLength" "paginate" "disqusShortname" "googleAnalytics" >}}

## Default Parameters

In this project folder, you will find a file called `config.toml`. Open this file in any text editor or IDE.

{{< contentblocklist "default-params/" "favicon" "logo" "logo_width"  "description" "author" "copyright" "social-fa" >}}

8. **main_section**  defines the section names that you want to show on your website. It's an array, so you can add more sections to show. For more information, see [Official docs](https://gohugo.io/functions/where/#mainsections).
9. **custom_script** You can add any third party scirpt here, like any beacon service. keep in mind, you need to replace all double quote `"` with single quote `'` in the script.
10. **cookies**  you can set cookie consent messege on and set expiry days from here.
