---
title: Products
date: '2019-11-10T08:50:02-03:00'
weight: 6
draft: false
---
Hugo provides a `new` command to create a page, as a example for creating a new product is `hugo new products/product-name.md` , it will create a product.

Configure Product
-----------------

You can configure your product from the front-matter. Front-matter starts with `---` and end with also `---` . In this front matter you can give `description = meta description`, `price = "20$"` , `priceBefore = "25$"`. you can also give `productShortDescription`. You must provide a `productID` and it should be unique, it’s the product identity for adding this product in cart. And also give the `type = products`, otherwise it will not shown in product list. products images are in a loop, you can add more then 1 image for one product, but the first image will shown in product list page, other image can be found in product single page.

When you created a new product, the `draft` default value is true, and when the draft is true your product will not show, you need to change it for showing this product. like `draft = false`.

After closing front matter give your product full description, remember that every file that has an `.md` extension, are supports markdown.