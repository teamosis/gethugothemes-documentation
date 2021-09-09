---
title: 'Create New Post'
date: '2019-07-28T04:29:41-03:00'
weight: 10
draft: false
---

Agico is a multilingual template. So when you want to create a new post, you need to define the language. For example, creating a new post in the English language, the command is `hugo new english/blog/new-post.md` and for French it's `hugo new french/blog/new-post.md`.

## Configure Post

You can configure your blog post from the front-matter. Front-matter starts with `---` and end with also `---` . In this front matter you can give `author = author name`, `description = meta description`, `image = images/blog/post-thumb.jpg`, `categories` and `tags`.

When you created a new post, the `draft` default value is `true`, which means it's not published yet. Make it false to publish the post, ex: `draft = false`.
After closing the front matter, give your post content. 

{{< notice tip >}}
Remember that every file that has a `.md` extension supports markdown.
{{< /notice >}}

### Example Front-Matter

```yml
---
title: "Cupidat non proident sunt officia deserunt mollit anim."
date: 2019-04-10T09:51:57+06:00
watermark: "Blog" 
page_header_image: "images/background/about.jpg"
description : "Cupidatat non proident sunt culpa qui officia deserunt mollit <br> anim idest laborum sed ut perspiciatis."
image : "images/blog/blog-post-1.jpg"
author : "Admin"
categories: ["Investment Planning"]
tags: ["Advice","Business","Consultancy","Market Analysis","Marketing","Finance"]
type : "post"
---
```