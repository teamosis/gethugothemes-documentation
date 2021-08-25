---
title: "Configuration"
date: 2020-12-28T13:00:00+07:00
weight: 2
---

In your sites root folder you will find a file called `config.toml`. Open this file with your text editor or IDE.

## Sitewide configuration

{{< contentblocklist "default-config/" "baseURL" "title" "theme" "googleAnalytics" >}}

## Menu Configuration

* `[[menu.main]]` is the main menu loop, you can add your navigation item by copy and pasting this line.
* `name` attribute is for navigation item name.
* `URL` is for the page url, just give the page name here, it will automatically add the base URL from your site. like if you want to give the about page url here, just type `about` .
* `weight` is for your navigation sorting, the smaller number weight will show first.

## Parameter Configuration

Most parameters in the `[params]` section of your configuration are commented. You can change the basic setup of the theme and add information or enable/disable features.

## Map Configuration

The included map can be configured in the `[params.map]` section:

```toml
[params.map]
enable = true
gmap_api = "https://maps.googleapis.com/maps/api/js?key=YOURKEY"
map_center_lat = "25.000"
map_center_lng = "-80.000"
map_position_lat = "25.000"
map_position_lng = "-80.000"
map_marker = "images/map-marker.png"
```

If you wish to center the map on a different location than the map marker is located then use `map_center_lat` and `map_center_long` for this point. The map marker can be set with `map_position_lat` and `map_position_lng`. To disable the map just set `enable` to `false`. 

[Get an API-key for Google Maps](https://developers.google.com/maps/documentation/javascript/get-api-key)

## Icons

In this template we use fontawesome 4.7.0 icon pack, you can choose your necessary icon from [here](https://fontawesome.com/v4.7.0/icons/)
