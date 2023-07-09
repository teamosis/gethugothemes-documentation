---
_build:
  render: never
  list: never
  publishResources: false
---

We have predefined a layout for the new page. It's a multilingual theme. To create a new page, you need to define the language name before the page name.

### Create a new page for the English Language

```toml
hugo new english/new-page.md
```

### Create a new page for the French Language

```toml
hugo new french/new-page.md
```

## Duplicate an existing page

If you want to duplicate an existing page, you can copy that page and paste it where you want in the content folder. Then change the page name and title from the `front-matter`. Then you can change the content as per your requirement.
