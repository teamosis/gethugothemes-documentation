---
_build:
  render: never
  list: never
  publishResources: false
---

**SITENAME** has huge collection of (Partials and Shortcodes) modules.

You can find all modules here - [Gethugothemes Hugo Module](https://github.com/gethugothemes/hugo-modules).
<br /> To use a Module; follow the `README.md` file attached with each module.

Modules will be downloaded and added when it will be added as imports to configuration.

### Update Modules

{{< tabs >}}
{{< tab "Yarn" >}}

```javascript
yarn update
```

{{< / tab >}}
{{< tab "NPM" >}}

```javascript
npm run update
```

{{< / tab >}}
{{< tab "Hugo" >}}

```md
hugo mod get -u ./... && hugo mod tidy
```

{{< / tab >}}
{{< / tabs >}}
