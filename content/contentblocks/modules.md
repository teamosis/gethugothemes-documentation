---
build:
  render: never
  list: never
  publishResources: false
---

**NAME** uses [Hugo Modules](https://gohugo.io/hugo-modules/) to manage dependencies.

You can find all modules here - [Gethugothemes Hugo Module](https://gethugothemes.com/hugo-modules).
To use a Module, follow the `README.md` file attached with each module.

## Manage Modules

You can find `modules.toml` file in the `config/_default` directory. This file contains all the modules used in this project.

Example:

```toml
[[imports]]
path = "github.com/gethugothemes/hugo-modules/images"
```

## Update Modules

If you want to update all modules, run the following command:

```javascript
npm run update-modules
```
