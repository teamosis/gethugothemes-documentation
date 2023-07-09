---
title: Content Management
date: '2019-12-02T08:15:41-03:00'
weight: 12
draft: false
---

All the pages for your website can be found in the `content` folder. Since this theme supports multiple languages, there will be a separate folder for each language, such as `english` for English, `french` for French, and so on.

Each page is written in Markdown format. If you are unfamiliar with Markdown syntax, you can learn more about it [here](https://www.markdownguide.org/basic-syntax/). Additionally, every Markdown page includes front matter, which is the metadata for that page. To learn more about front matter, refer to [this resource](https://gohugo.io/content-management/front-matter/).

## Homepage

The homepage for each language can be found in the respective language folder within the `content` directory. The homepage is represented by the `_index.md` file, and you can update its content from there.

## Regular Pages

The regular pages, such as "About," "Contact," or "Privacy," are located within the **pages** folder in each language folder within the `content` directory. You can add or modify your regular pages from there.

## List and Single Pages

The Hugo site consists of two types of pages: list pages and single pages. A list page serves as a landing page for single pages. For example, a "Blog" page would be a list page, while individual blog posts would be single pages.

To illustrate, in the `content/english/blog` folder, you will find the `_index.md` file, which represents the list page for the blog. Additionally, you can create separate Markdown files for each blog post within the same folder as single pages.

Feel free to add your blog posts or other content accordingly.
