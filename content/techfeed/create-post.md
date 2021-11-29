---
title: 'Create New Post'
date: '2019-12-02T08:15:19-03:00'
weight: 8
draft: false
---

When you want to create a new post,  the command is `hugo new blog/new-post.md`.

## Configure Post

You can configure your blog post from the front-matter. Front-matter starts with `---` and end with also `---` . In this front matter you can give `title: "MEMORIES FROM LAST SUMMER"`, `featured = true or false`, `image = images/blog/post-thumb.jpg`, and `categories` .

When you created a new post, the `draft` default value is `true`, which means it's not published yet. Make it false to publish the post, ex: `draft = false`.
After closing the front matter, give your post content. 

{{< notice tip >}}
Remember that every file that has a `.md` extension supports markdown.
{{< /notice >}}

### Example Front-Matter

```yml
---
title: "MEMORIES FROM LAST SUMMER"
date: 2021-07-15T11:06:48+06:00
image: "images/01.jpg"
featured: true
categories: ["Development"]
draft: false
---
```