---
title: Content Management
date: '2019-12-02T08:15:41-03:00'
weight: 6
draft: false
---

You will get home page, faq page and contact that your website has in the data folder and others page has in the content folder. The data and content folder is a subfolder of the project folder.

## Homepage

The homepage content is configured via data configuration in `data/homepage.yml`.  Open this page in any text editor, and you will be able to edit it. Some of the sections can hide. You can change its `enable` value to `false`.

## Other Pages

There are two types of pages in the Hugo theme, list page, and single page. The list page is kind of a landing page (ex: `about page`). And the single page is called the inner page of a product or a post (ex: blog single page). We need to define the structure or markup of every page.

We already provided the necessary markup for the existing pages. You can find the markup in the `themes/layout` folder. For example, **Faq** page layout is `layout: faq`. We have also provided default `list` page layouts. So when you create a new page, you don't need to define the layout. It will be the default layout.
