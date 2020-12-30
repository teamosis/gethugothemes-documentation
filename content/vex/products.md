---
title: "Products"
date: 2020-12-30T13:00:00+07:00
weight: 5
---

Hugo provides a command to create a new post:

```shell
hugo new products/new-product.md
```

## Configure Product

You can configure your blog post from the front-matter. Front-matter starts and ends with `---`. In this front matter you can change the title and add a meta-description. The date will be automatically filled.

```yaml
---
title: "Redmi Watch"
date: 2019-10-17T11:22:16+06:00
image: "images/showcase/showcase-5.png"
images: 
  - "images/showcase/showcase-5.png"
  - "images/showcase/showcase-2.png"
  - "images/showcase/showcase-3.png"
  - "images/showcase/showcase-4.png"

# meta description
description : "this is meta description"

# product Price
price: "30.00"
discount_price: "25.00"

# product variation
colors : ["black","white","gray"]
sizes : ["small","medium","large"]

draft: false
---
```

- `title` is the product name
- `image` is the main product image
- `images` is an array with more product images. Add as many as you want
- `price` is the product price
- `discount_price` is a discounted price, that is shown along side the original price. Leave empty if you wish to use a single non-discounted price.
- You can further configure product variations like `colors` and/or `sizes`

The content of the product page is shown alongside the product images. 

{{< notice warning >}}After you created a new post, the `draft` value is true and your post will not show up on the site. You need to change this parameter to `false` or remove it to show this post. Only then your post will show in the blog overview page.{{< /notice >}}
