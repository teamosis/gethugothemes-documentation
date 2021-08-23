---
_build:
  render: never
  list: never
  publishResources: false
---

To change website color , text color , fonts etc please open `config.toml` file which is located in your project folder .

## Change Website Color and fonts

Under `params.variables` section you will have all the parameters to change the website color preferences , for example if you change the value of `primary_color` it will change the whole website color . 

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
To change website font style , font size go to font variable section 


Below the color variables, you will get the font variables, and you can change the value of those variables as per your requirements. There is some specific format you need to follow to change the font variables.
For example: If you want to change the primary font, you need to write the name of font family exactly like the name given in Google font and the weight of the font is given by a colon and then typing wght followed by @ and font weight values so the end result is `Work Sans:wght@400;700`

If you want to change the value of the primary font type, you can change the value to either sans-serif or serif as per your requirement.

example code:

```toml
font_primary = "Work Sans:wght@400;700"
font_primary_type = "sans-serif" # [serif/sans-serif]
font_secondary = "Roboto"
font_secondary_type = "serif" # [serif/sans-serif]
icon_font = "Font Awesome 5 Free"
```

`font_size` and `font_scale` is pretty new to our themes. It is used to change the full website font size. learn more about it [here](https://type-scale.com/). We have added the whole system of font sizes to our theme. So you can change the font sizes as per your requirement direct from **config.toml**.

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
