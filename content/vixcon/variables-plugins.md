---
title: 'Colors, Fonts and Plugins'
date: '2020-05-10T02:54:59-03:00'
weight: 3
draft: false
---


When someone buys a theme, they usually change the theme default colors, someone also changes the fonts. So here is the guide for how to do it.


## Change Website Colors
 * `colors` change is very easy with the power of scss variables. Open `assets/scss/variables.scss` file in a text editor. Then you can see the global variables we used in this theme. `primary-color` defines the theme default color. If you change it the whole theme default colors will be changed when you compile the theme again. Sometimes it compiles but the browser shows the previous colors. Then you need to clear your browser cache and reload again. You can also change the other variable colors like this.

```scss
// Color Variables
$white                    : #ffffff;
$black                    : #111111;
$black-lighter            : #444444;
$gray                    : #a4a4a4;
$gray-light               : #f8f8f8;
$border-color             : #e8e8e8;
$primary-color: #ff007a;
$secondary-color: #4125dd;
$orange:#ff4747;
$yellow:#f87c57;

```


## Change Website fonts

 * `font-family` name is also defined in the `assets/scss/variables.scss` files. If you want to change the font then change the `font-family` form here. And give your font link to the `assets/scss/typography.scss` files. In `types.scss` files, you can customize the `font-size`, `font-weight`, and `lineheight` of your texts. You can get more `font-face` form [here](https://fonts.google.com/).
![google-fonts](/images/theme-settings/google-fonts.png)

```scss
// Font Variables from variables.scss file
$base-font                : 'Poppins', sans-serif;
$heading-font             : 'Poppins', sans-serif;

// font links from typography.scss file
@import url('https://fonts.googleapis.com/css?family=Poppins:400,700,800|Source+Sans+Pro:400|Catamaran:400,600,700');
```

## Third-Party Plugins

You can add or remove third-party plugins from `my-project/config.toml` file. We create a loop for plugins. You can see two plugins loops here, the first one is for `css`, and the last one is for `js`.

{{< notice note >}}
Sometimes you need to close the Hugo server and run again for rendered correctly.
{{< /notice >}}

### CSS plugins

```toml
[[params.plugins.css]]
link = "https://cdn.examplesite.com/your-plugin.css"
attributes = "your-attributes" # optional field
```

### js plugins

```toml
[[params.plugins.js]]
link = "https://cdn.examplesite.com/your-plugin.js"
attributes = "your-attributes" # optional field
```