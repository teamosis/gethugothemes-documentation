---
title: 'Create New Product'
date: '2019-12-02T08:15:19-03:00'
weight: 8
---

Hugo provides a `new` command to create a Product, as a example for creating a new product is `hugo new shop/new-product.md` , it will create a product.

## Configure Product

You can configure your product from the front-matter. Front-matter starts with `---` and end with also `---` . In this front matter you can the value of your meta description tag: `description = text for your meta tag`, bgImage if for page title `bgImage = images/backgrounds/header-bg.jpg`, `images` is a loop. you can set the images for a product, the first one will show as product thumb, and other images will show up on the products single page. Then set the price for the product in `price` , if it has discount then give the previous price in `priceBefore`. Otherwise leave it empty. Then declare the product category, colors, sizes and other details.

When you created a new post, the `draft` default value is true, and when the draft is true your post will not show, you need to change it for showing this post. like `draft = false`. Then your post will show in blog page.

After closing front matter give your product content, remember that every file that has an `.md` extension, are supports markdown.

{{< notice tip >}}
Remember that every file that has a `.md` extension supports markdown.
{{< /notice >}}


### Example Front-Matter

```yml
---
title: "Sneakers"
date: 2019-11-25T13:39:07+06:00
draft: false
description : "Nice and classy Keds"
bgImage : "images/backgrounds/header-bg.jpg"
images:
  - "images/products/shoe-3.jpg"
price: "49.00"
priceBefore: ""
categories : ["shoe"]
colors : ["white","black"]
sizes : ["S","M","XL"]
productWeight : "500 G"
dimensions : "10 x 10 x 15 cm"
materials : "100% Leather"
---