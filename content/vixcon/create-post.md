---
title: 'Create New Post'
date: '2019-12-02T08:15:19-03:00'
weight: 10
draft: false
---

Vixcon is a multilingual template. So when you want to create a new post, you need to define the language. For example, creating a new post in the English language, the command is `hugo new english/blog/new-post.md` and for French it's `hugo new french/blog/new-post.md`.

## Configure Post

You can configure your blog post from the front-matter. Front-matter starts with `---` and end with also `---` . In this front matter you can give `author = author name`, `description = meta description`, `image = images/blog/blog-2.jpg`, `categories` and `tags`.

When you created a new post, the `draft` default value is `true`, which means it's not published yet. Make it false to publish the post, ex: `draft = false`.
After closing the front matter, give your post content. 

{{< notice tip >}}
Remember that every file that has a `.md` extension supports markdown.
{{< /notice >}}

### Example Front-Matter

```yml
---
title: "5 Creative Ideas for Conference Sessions"
date: 2019-09-10T13:51:25+06:00
draft: false
description: "this is meta description"
bg_image : "images/bg/cta-bg.jpg"
image : "images/blog/blog-2.jpg"
author: "John Doe"
categories: ["Lifestyle"]
tags: ["Music", "Agency"]
type: "post"
---
```