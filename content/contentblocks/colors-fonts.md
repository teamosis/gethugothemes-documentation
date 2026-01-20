---
build:
  render: never
  list: never
  publishResources: false
---

To customize the colors and fonts of your website, follow the steps below:

1. Open the `data/theme.json` file.

### Changing Colors

In the `colors` section of the file, you will find parameters to modify the color preferences for your website. For example, changing the value of `primary` will alter the primary color used throughout the entire website.

Use the following example code as a reference:

```json
{
  "colors": {
    "default": {
      "theme_color": {
        "primary": "#000",
        "secondary": "#73cfa8",
        "tertiary": "#fb9289",
        "quaternary": "#fde179",
        "quinary": "#73b1ff",
        "senary": "#F4FDFF",
        "body": "#fff",
        "border": "#DBDBDB",
        "theme_light": "#f3f0f0",
        "theme_dark": "#000000"
      },
      "text_color": {
        "default": "#555555",
        "dark": "#222",
        "light": "#fffefe"
      }
    }
  }
}
```

## Changing Fonts

To customize the font family and font size of your website, follow the steps below:

1. Open the `data/theme.json` file.

2. Locate the `fonts` section in the file. Here, you will find all the parameters to modify the font preferences for your website.

3. Visit [Google Fonts](https://fonts.google.com/) to explore the available fonts. Select the font you want to use for your website.

4. Copy the **bold part** of the URL for the selected font.

   ![google-fonts](/images/theme-settings/google-fonts.png)

5. Paste the copied URL fragment into the `primary` field within the `font_family` section. This will change the font used for the primary text on your website.

example code:

```json
{
  "fonts": {
    "font_family": {
      "primary": "Maven+Pro:wght@400;500;600;700",
      "primary_type": "sans-serif",
      "secondary": "Merriweather:wght@400;700",
      "secondary_type": "sans-serif"
    },
    "font_size": {
      "base": "16",
      "scale": "1.23"
    }
  }
}
```
