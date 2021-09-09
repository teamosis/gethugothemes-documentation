---
title: Content Management
date: '2019-12-02T08:15:41-03:00'
weight: 6
draft: false
---

All the pages content comes from the data folder. After opening the data folder you will see all page contents file, like `homepage.yml` for homepage, `about.yml` for about page.

There are two types of pages in the Hugo theme, list page, and single page. The list page is kind of a landing page (ex: `about page`). And the single page is called the inner page of a product or a post (ex: blog single page). We need to define the structure or markup of every page.

We already provided the necessary markup for the existing pages. You can find the markup in the `themes/layout` folder. For example, **About** page layout is `layout: about`. We have also provided default `list` and `single` page layouts. So when you create a new page, you don't need to define the layout. It will be the default layout.