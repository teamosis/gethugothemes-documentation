---
title: 'Create New Post'
date: '2020-06-08T03:08:40-03:00'
weight: 10
draft: false
---

Bizcraft is a multilingual template. So when you want to create a new post, you need to define the language. For example, creating a new post in the English language, the command is `hugo new english/blog/new-post.md` and for French it's `hugo new french/blog/new-post.md`.

## Configure Post

You can configure your blog post from the front-matter. Front-matter starts with `---` and end with also `---` . In this front matter you can give `title = post title`, `date`, `page_header_bg = images/banner/banner1.jpg`, `author = author name`, `description = meta description`, `image = images/blog/post-thumb.jpg`, `categories` and `tags`.

When you created a new post, the `draft` default value is `true`, which means it's not published yet. Make it false to publish the post, ex: `draft = false`.
After closing the front matter, give your post content. 

{{< notice tip >}}
Remember that every file that has a `.md` extension supports markdown.
{{< /notice >}}

### Example Front-Matter

```yml
---
title: "If you are going to use a passage"
date: 2021-02-12T12:14:34+06:00
page_header_bg: "images/banner/banner1.jpg"
image: "images/blog/blog2.jpg"
author: "John Doe"
categories: ["development"]
tags: ["Education", "new", "creative"]
description: "This is meta description."
draft: false
---
---