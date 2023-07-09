---
_build:
  render: never
  list: never
  publishResources: false
---

## Collapse Shortcode

```md
{{</* collapse "this is a simple collapse" */>}}
This is the content that collapse
{{</*/ collapse */>}}
```

Collapse shortcode allows you to create collapsible content blocks. You can use it to create accordions or to create collapsible panels. It takes one parameter as **collapse header** and inner content.
