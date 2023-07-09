---
_build:
  render: never
  list: never
  publishResources: false
---

## Third-Party Plugins

You can add or remove third-party plugins from `PLUGINSDIR` file. We create a loop for plugins. You can see two plugins loops here, the first one is for `css`, and the last one is for `js`.

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
