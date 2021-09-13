---
title: 'Create New Post'
date: '2019-12-02T08:15:19-03:00'
weight: 8
draft: false
---

 when you want to create a new post, the command is `hugo new blog/new-post.md`.

## Configure Post

You can configure your blog post from the front-matter. Front-matter starts with `---` and end with also `---` . In this front matter you can give `author = author name`, `description = meta description`, `page_header_bg = images/background/page-title-bg.jpg`, `image = images/blog/post-thumb.jpg`, `categories` and `tags`.

When you created a new post, the `draft` default value is `true`, which means it's not published yet. Make it false to publish the post, ex: `draft = false`.
After closing the front matter, give your post content. 

{{< notice tip >}}
Remember that every file that has a `.md` extension supports markdown.
{{< /notice >}}

### Example Front-Matter

```yml
---
title : "Elementum purus id ultrices."
page_header_bg : "images/background/page-title-bg.jpg"
date: 2020-03-14T15:40:24+06:00
image: "images/news/post-thumb-two.jpg"
author: "Admin"
author_id: "https://linkedin.com/in/#"
tags: ["business", "events"]
categories: ["events", "creative"]
description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores, velit."
draft : false
---
```