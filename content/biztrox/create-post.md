---
title: 'Create New Post'
date: '2019-12-02T08:15:19-03:00'
weight: 10
draft: false
---

Biztrox is a multilingual template. So when you want to create a new post, you need to define the language. For example, creating a new post in the English language, the command is `hugo new english/blog/new-post.md` and for French it's `hugo new french/blog/new-post.md`.

## Configure Post

You can configure your blog post from the front-matter. Front-matter starts with `---` and end with also `---` . In this front matter you can give `title = title name`, `bg_image = images/background/page-title.jpg`, `date`, `description = meta description`, `author = author name`,  `image = images/blog/post-thumb.jpg`, `categories` `tags` and `type`.

When you created a new post, the `draft` default value is `true`, which means it's not published yet. Make it false to publish the post, ex: `draft = false`.
After closing the front matter, give your post content. 

{{< notice tip >}}
Remember that every file that has a `.md` extension supports markdown.
{{< /notice >}}

### Example Front-Matter

```yml
---
title: "Business Magnate"
bg_image: images/background/page-title.jpg
date: 2018-09-24T11:07:10+06:00
description : "This is meta description"
author: John Doe
image: images/blog/blog-3.jpg
categories: ["Company News"]
tags: ["Advice"]
type: post
---
```