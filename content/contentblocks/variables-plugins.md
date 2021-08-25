---
_build:
  render: never
  list: never
  publishResources: false
---

To change website colors, fonts, and plugins, please open the `my-project/themes/config.toml` file.

{{< notice note >}}
If you are managing it from forestry, then you can find it at the bottom of the left sidebar. The file called **Variables & Plugins**
{{< /notice >}}

## Change Website Colors
Under the `params.variables` section, you will have all the parameters to change the website color preferences. For example, if you change the value of `color_primary`, it will change the whole website's primary color.

example code:

```toml
[params.variables]
color_primary = "green"
color_secondary = "#001111"
body_color = "#fff"
text_color = "#666666"
text_dark = "#222222"
text_light = "#959595"
border_color = "#ACB9C4"
black = "#000"
white = "#fff"
light = "#fdfdfd"
```

## Change Website fonts
Below the color variables, you will get the font variables, and you can change the value of those variables as per your requirements. 

Visit [Google Fonts](https://fonts.google.com/) to see the fonts that are available to you. Then select the font you want to use. Then copy the **bold part** of the URL and paste it in the `font_primary` field. It will change the font of the website's primary text.
![google-fonts](/images/theme-settings/google-fonts.png)

If you want to change the value of the primary font type, you can change it to either `sans-serif` or `serif` as per your requirement.

example code:

```toml
font_primary = "Roboto:ital,wght@0,300;0,400;1,400"
font_primary_type = "sans-serif" # [serif/sans-serif]
font_secondary = "Work+Sans"
font_secondary_type = "serif" # [serif/sans-serif]
icon_font = "Font Awesome 5 Free" # chose icon: https://fontawesome.com/icons
```

`font_size` and `font_scale` is pretty new to our themes. It's changed the full website font size. learn more about it [here](https://type-scale.com/). We have added the whole system of font sizes to our theme. So you can change the font sizes as per your requirement direct from **config.toml**.

example code:
```toml
# base font size for full website 
font_size = "16px" # default is 16px
font_scale = "1.25" # default is "majorThird": 1.25
# Font Scale Sizes
# "minorSecond": 1.067,
# "majorSecond": 1.125,
# "minorThird": 1.2,
# "majorThird": 1.25,
# "perfectFourth": 1.333,
# "augmentedFourth": 1.414,
# "perfectFifth": 1.5,
# "goldenRatio": 1.618
```

## Third-Party Plugins

You can add or remove third-party plugins from here. We create a loop for plugins. You can see two plugins loops here, the first one is for `css`, and the last one is for `js`.

{{< notice note >}}
Sometimes you need to close the Hugo server and run it again for rendered correctly.
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