---
title: 'Create Product'
date: '2019-12-02T08:15:19-03:00'
weight: 6
draft: false
---
Hugo provides a `new` command to create a post, as a example for creating a new post is `hugo new shop/new-product.md` , it will create a product.

Configure Product
-----------------

You can configure your product from the front-matter. Front-matter starts with `---` and end with also `---` . In this front matter you can give meta description `description = meta description`, bgImage if for page title `bgImage = images/backgrounds/header-bg.jpg`, `images` is a loop. you can set many image for a product, the first one will show as product thumb, and other image can be shown in product single page. Then set the price for the product in `price` , if it has discount then give the previous price in `priceBefore`. Otherwise leave it empty. Then declare the product category, colors, sizes and other details.

When you created a new post, the `draft` default value is true, and when the draft is true your post will not show, you need to change it for showing this post. like `draft = false`. Only then your post will show in blog page.

After closing front matter give your product content, remember that every file that has an `.md` extension, are supports markdown.