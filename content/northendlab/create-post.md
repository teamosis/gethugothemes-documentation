---
title: 'Create New Post'
date: '2019-12-02T08:15:19-03:00'
weight: 10
draft: false
---

Northendlab is a multilingual template. So when you want to create a new post, you need to define the language. For example, creating a new post in the English language, the command is `hugo new english/post/new-post.md` and for French it's `hugo new french/post/new-post.md`.

## Configure Post

You can configure your blog post from the front-matter. Front-matter starts with `---` and end with also `---` . In this front matter you can give `title`, `author = author name`, `description = meta description`, `image = images/post/post-4.jpg`, `categories`, `featured` and `tags`.

When you created a new post, the `draft` default value is `true`, which means it's not published yet. Make it false to publish the post, ex: `draft = false`.
After closing the front matter, give your post content. 

{{< notice tip >}}
Remember that every file that has a `.md` extension supports markdown.
{{< /notice >}}

### Example Front-Matter

```yml
---
title: "Apple's M1 ARM Pivot Step Int the Reality Field"
image: "images/post/post-4.jpg"
author: "John Doe"
date: 2019-11-07T05:00:00Z
description: "This is meta description"
categories: ["Design Tools"]
tags: ["Design", "Tech"]
featured: true
---
```