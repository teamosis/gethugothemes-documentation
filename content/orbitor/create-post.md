---
title: 'Create New Post'
date: '2019-12-02T08:15:19-03:00'
weight: 8
draft: false
---

Orbitor is a multilingual template. So when you want to create a new post, you need to define the language. For example, creating a new post in the English language, the command is `hugo new english/blog/new-post.md` and for French it's `hugo new french/blog/new-post.md`.

## Configure Post

You can configure your blog post from the front-matter. Front-matter starts with `---` and end with also `---` . In this front matter you can give `title`, `page_header_bg = images/bg/section-bg5.jpg`, `description = meta description`, `image = images/blog/blog-1.jpg`, `categories` and `tags`.

When you created a new post, the `draft` default value is `true`, which means it's not published yet. Make it false to publish the post, ex: `draft = false`.
After closing the front matter, give your post content. 

{{< notice tip >}}
Remember that every file that has a `.md` extension supports markdown.
{{< /notice >}}

### Example Front-Matter

```yml
---
title: "How to Organize Your Office for Maximum Productivity?"
date: 2019-09-05T15:24:04+06:00
draft: false
description: "This is meta description"
page_header_bg: "images/bg/section-bg5.jpg"
image: "images/blog/blog-1.jpg"
categories: ["Latest News"]
tags: ["Web", "Agency"]
---
```