---
_build:
  render: never
  list: never
  publishResources: false
---

## Tab Shortcode

```yml
{{</* tabs */>}}

  {{</* tab "first tab" */>}}
  This is first Tab Content
  {{</* /tab */>}}

  {{</* tab "second tab" */>}}
  This is second Tab Content
  {{</* /tab */>}}
  
{{</* /tabs */>}}
```

This shortcode allows you to create a tabbed content block. You can add as many tabs as you like. The content of every tab writes in the `tab` shortcode. You can use this example code to create a tabbed content block.
