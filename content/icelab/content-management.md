---
title: Content Management
date: '2019-12-02T08:15:41-03:00'
weight: 7
draft: false
---

You will get every page that your website has in the content folder. The content folder is a subfolder of the project folder.

{{< notice note >}}
For maintaining it from forestry, you can find all the page content at the top of the left sidebar.
{{< /notice >}}

## Homepage
 `Homepage` and `about page` data come` from data `folder. After opening the data folder you will see all page contents file, like `homepage.yml` for homepage, `about.yml` for about page. Open this page in any text editor, and you will be able to edit it. Some of the sections can hide. You can change its `enable` value to `false`.

## Other Pages
There are two types of pages in the Hugo theme, list page, and single page. The list page is kind of a landing page (ex: `about page`). And the single page is called the inner page of a product or a post (ex: blog single page). We need to define the structure or markup of every page.

We already provided the necessary markup for the existing pages. You can find the markup in the `themes/layout` folder. For example, **About** page layout is `layout: about`. We have also provided default `list` page layouts. So when you create a new page, you don't need to define the layout. It will be the default layout.