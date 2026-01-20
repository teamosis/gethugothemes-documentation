---
build:
  render: never
  list: never
  publishResources: false
---

## Main Navigation

Main navigation is a list of links to other pages. It is rendered in the header of the page. you can find the `menus.toml` file in the `config/_default` directory.

### Normal Menu

```toml
[[main]]
name = "About"
url = "about/"
weight = 1
```

* `name` is for menu item name/text.
* `URL` is for the page URL. To set about page URL here, type `about/`. You can also use an external URL by putting the URL in this attribute. ex: `url = "https://gethugothemes.com/"`
* `weight` is for your navigation sorting. The smaller number weight will show first. You can switch menu items by changing the weight value.

### Dropdown Menu

```yml
[[main]]
weight = 4
name = "Dropdown"
hasChildren = true

  [[main]]
  parent = "Dropdown"
  name = "Dropdown Item"
  url = "https://gethugothemes.com/"
  weight = 1
```

* For **dropdown menu**, you need to add another attribute called `hasChildren = true`. And remove `URL`. Then repeat the `[[main]]` loop, and put the `parent =` attribute in the dropdown menu item. Parent name should be the same as the dropdown item name. Also, update `name` and `URL` attributes.
