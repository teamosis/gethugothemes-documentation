`theme` sets up the used theme. If your theme is located in `/themes/themename` then the value for this parameter is `themename`.

If you use theme components you can change this parameter to the following format:

```toml
themes = ["theme1", "theme2", "themename"]
```

Make sure, that your theme is the last item in this list. Hugo will load these themes and module from the left and files with identical names will be overwritten subsequently.
