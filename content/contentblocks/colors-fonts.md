---
_build:
  render: never
  list: never
  publishResources: false
---

In this root folder you will find a file called `config.toml` open this file in any text editor or IDE.

Colors
------
Search for the color variables by typing `variables`. Under variables you will get all different types of color variables as in `primary_color`, `secondar_color`, `text_color`, `border_color`, etc. You can then change the value of these variables as per your requirements.

example code:

```toml
[params.variables]
primary_color = "green"
secondary_color = "#001111"
body_color = "#fff"
text_color = "#666666"
text_color_dark = "#222222"
text_color_light = "#959595"
border_color = "#ACB9C4"
black = "#000"
white = "#fff"
light = "#fdfdfd"
```

Fonts
-----
below the color variables you will get the font variables and you can change the value of those variables as per your requirements. There is some specific format you need to follow to change the font variables.
For example: If you want to change the primary font you need to write the name of font family exactly like the name given in Google font and the weight of the font is given by a colon and then typing wght followed by @ and font weight values so the end result is `Work Sans:wght@400;700`

If you want to change the value of primary font type you can change the value to either sans-seif or serif as per your requirement.

example code:

```toml
primary_font = "Work Sans:wght@400;700"
primary_font_type = "sans-serif" # [serif/sans-serif]
secondary_font = "Roboto"
secondary_font_type = "serif" # [serif/sans-serif]
icon_font = "Font Awesome 5 Free"
```