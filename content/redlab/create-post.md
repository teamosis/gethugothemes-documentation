---
title: 'Create New Post'
date: '2019-12-02T08:15:19-03:00'
weight: 10
draft: false
---

Reddlab is a multilingual template. So when you want to create a new post, you need to define the language. For example, creating a new post in the English language, the command is `hugo new english/blog/new-post.md` and for French it's `hugo new french/blog/new-post.md`.

## Configure Post

You can configure your blog post from the front-matter. Front-matter starts with `---` and end with also `---` . In this front matter you can give `title`, `bg_image = images/backgrounds/blog-page.jpg`,  `author = author name`, `description = meta description`, `image = images/blog/blog-post-1.jpg`, `type` and `tags`.

When you created a new post, the `draft` default value is `true`, which means it's not published yet. Make it false to publish the post, ex: `draft = false`.
After closing the front matter, give your post content. 

{{< notice tip >}}
Remember that every file that has a `.md` extension supports markdown.
{{< /notice >}}

### Example Front-Matter

```yml
---
title: "Elements List That You Can Use In This Template"
date: 2019-07-06T15:27:17+06:00
draft: false
bg_image: "images/backgrounds/blog-page.jpg"
description : "this is meta description"
image: "images/blog/blog-post-1.jpg"
author: "john doe"
tags: ["Elements", "Automation"]
type: "post"
---
```