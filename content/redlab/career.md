---
title: Career
date: '2019-09-02T03:23:03-03:00'
weight: 8
draft: false
---
Hugo provides a `new` command to create a post, as an example for creating a new career page is `hugo new content/english/career/new-career.md` , it will create an english career page.

Configure Post
--------------

You can configure your career from the front-matter. Front-matter starts with `---` and end with also `---` . In this front matter you can give `description = meta description`, `image = images/career/logo.jpg`, `bg_image = image.jpg`( background image is for page header)`.`

When you created a new post, the `draft` default value is true, and when the draft is true your post will not show, you need to change it for showing this post. like `draft = false`. Only then your post will show in blog page.

After closing front matter give your post content, remember that every file that has an `.md` extension, are supports markdown.