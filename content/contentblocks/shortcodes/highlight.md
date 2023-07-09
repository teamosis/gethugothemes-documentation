---
_build:
  render: never
  list: never
  publishResources: false
---

## Highlight Shortcode

```md
{{</* highlight html */>}}
<section class="section">
  <div class="container">
    <h1>Hello World!</h1>
  </div>
</section>
{{</* /highlight */>}}
```

This shortcode allows you to highlight text. Highlight takes exactly one required `language` parameter. See the [Highlighting](https://gohugo.io/tools/syntax-highlighting/) documentation for a list of supported languages.
