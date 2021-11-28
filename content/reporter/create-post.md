---
title: 'Create New Post'
date: '2019-12-02T08:15:19-03:00'
weight: 10
draft: false
---

Reporter is a multilingual template. So when you want to create a new post, you need to define the language. For example, creating a new post in the English language, the command is `hugo new english/articles/new-post.md` and for French it's `hugo new french/articles/new-post.md`

## Configure Post

You can configure your articles post from the front-matter. Front-matter starts with `---` and end with also `---` . In this front matter you can give  `description = meta description`, `image = images/post/post-thumb.jpg`, and `categories`.

When you created a new post, the `draft` default value is `true`, which means it's not published yet. Make it false to publish the post, ex: `draft = false`.
After closing the front matter, give your post content. 

{{< notice tip >}}
Remember that every file that has a `.md` extension supports markdown.
{{< /notice >}}

### Example Front-Matter

```yml
---
title: "Top 7 Reasons to Visit Denver this Summer"
date: 2021-05-29T11:07:10+06:00
image: "images/post/post-4.jpg"
description: "this is meta description"
# define subcategories using "/"
# mouse is a subcategory of computer
categories: ["destination"]
draft: false
---
```