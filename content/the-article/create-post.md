---
title: 'Create New Post'
date: '2019-12-02T08:15:19-03:00'
weight: 10
draft: false
---

 when you want to create a new post, the command is `hugo new posts/computer/new-post.md` for computer category, `hugo new posts/internet/new-post.md` for internet category and `hugo new posts/website/new-post.md` for website category..

## Configure Post

You can configure your blog post from the front-matter. Front-matter starts with `---` and end with also `---` . In this front matter you can give `author = author name`, `description = meta description`, `image = images/post/post-9.jpg`, and `categories`.

When you created a new post, the `draft` default value is `true`, which means it's not published yet. Make it false to publish the post, ex: `draft = false`.
After closing the front matter, give your post content. 

{{< notice tip >}}
Remember that every file that has a `.md` extension supports markdown.
{{< /notice >}}

### Example Front-Matter

```yml
---
title: "React Vs Angular"
date: 2020-09-01T11:07:10+06:00
image: "images/post/post-9.jpg"
description: "this is meta description"
categories: ["website", "website/hugo"]
draft: false
---
```