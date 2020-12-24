---
title: "Configuration"
date: 2020-12-23T12:30:00+07:00
weight: 2
---

In your sites root folder you will find a file called `config.toml`. Open this file with your text editor or IDE.

## Sitewide configuration

* At the very top you will see a `baseURL` field for your site URL. Add your sites URL here.
* The `summaryLength` decides how many words are in excerpts of your posts when they are displayed as preview.
* `theme` sets up the used theme. For the Dot Hugo Theme this should be "dot-hugo". If you renamed the folder in `themes` to something else you need to add the new folder name.
* `title` is for your site's title.
* `googleAnalytics` - add your Google Analytics ID to enable analytics on all pages
* `disqusShortname` - add your disqus shortname to enable comments on the blog section. 

## Plugin Configuration

You can add third party plugins from here very easily, We create a loop for plugins, you will see two plugins loop here, first one is for `css` and last one is for `js`. just copy a loop item that you need and paste it in the bottom of the loop. and link correctly, after added a plugins, you maybe need to close the hugo server and run it again for rendered correctly.

## Menu Configuration

The configuration of the header menu can be found in the language section. This hands you the ability to create a menu per configured language.

```toml
[[Languages.en.menu.main]]
name = "Contact"
url = "/contact"
weight = 1

[[Languages.fr.menu.main]]
name = "Cntacter"
url = "/contacter"
weight = 1
```

* `[[languages.CODE.menu.main]]` is the main menu loop, you can add your navigation item by copy and pasting this line. Exchange the `CODE` part with the language you want to add this menu item to.
* `name` attribute is for navigation item name.
* `url` is for the page url, just give the page name here, it will automatically add the base URL from your site. like if you want to give the about page url here, just type `about` .
* `weight` is for your navigation sorting, the smaller number weight will show first.

To enable sub menues you have to add `hasChildren = true` to top level menu items and `parent = "Parent Menu Name"` to each subitem.

```toml
[[Languages.en.menu.main]]
weight = 5
name = "Pages"
hasChildren = true

  [[Languages.en.menu.main]]
  parent = "Pages"
  name = "Gallery"
  url = "gallery"
```

## Parameter Configuration

Most parameters in the `[params]` section of your configuration are commented. You can change the basic setup of the theme and add information or enable/disable features.

### Change the sitelogo

```yaml
logo = ""
logo_white = ""
```

`logo` is for your site logo on all pages and `logo_white` is for the display on the homepage, where the navigation is darker. If you leave any of these parameters empty then the sitename will be displayed.

The size of the logo will adapt automatically to the available navigation bar height.

### Change the favicon

If your favicon is a png, just drop off your image in your local `static/images/` folder and name it `favicon.png`. If you need to change this default behavior though, then create a new file in `layouts/partials/` named `head.html`and add the following line referencing your new icon:

```html
<link rel="shortcut icon" href="/images/favicon.png" type="image/x-icon" />
```

### Change default colors

This theme supports individual color schemes:

```toml
[params]
primary_color = "#02007e"
body_color = "#f9f9f9"
text_color = "#636363"
text_color_dark = "#242738"
white_color = "#ffffff"
light_color = "#f8f9fa"
```

### Change default Fonts

Changing the font is easy as well:

```toml
[params]
font_family = "lato" # Choose font family from : https://fonts.google.com/
```
