---
title: Content Management
date: '2019-12-02T08:15:41-03:00'
weight: 8
draft: false
---

You will get every page that your website has in content folder. The content folder is a subfolder of the project folder.

{{< notice note >}}
For maintaining it from forestry, you can find all the page content at the top of the left sidebar.
{{< /notice >}}

## Homepage
Content folder contain the root file as `_index.md`. Open this page in any text-editor and you will be able to edit it. Some of the section has ability to hide, you can hide change it's `enable` value to `false`.

## Other Pages
There are two types of pages in Hugo theme. list page and single page. The list page is kind of a landing page (i.e. about page). And the single page is called the inner page of a product or a post (i.e. blog single page). We need to define the structure or markup of every page.

We already provided the necessarry markup for the exisiting pages. You can find the markup in the `themes/layout` folder. For example, **About** page layout is `layout: about`. We have also provided default `list` and `single` page layout. So when you create a new page, you don't need to define the layout. It will be the default layout.