---
title: 'Create New Post'
date: '2019-12-02T08:15:19-03:00'
weight: 8
draft: false
---

 when you want to create a new post, the command is `hugo new post/new-post.md`.

## Configure Post

You can configure your blog post from the front-matter. Front-matter starts with `---` and end with also `---` . In this front matter you can give `title`, `date`, `description = meta description`, `image = images/post/post-2.jpg`, and `categories`.

When you created a new post, the `draft` default value is `true`, which means it's not published yet. Make it false to publish the post, ex: `draft = false`.
After closing the front matter, give your post content. 

{{< notice tip >}}
Remember that every file that has a `.md` extension supports markdown.
{{< /notice >}}

### Example Front-Matter

```yml
---
title: "Top 20+ Best Hugo Business Themes for 2020"
date: 2020-01-12T12:14:34+06:00
image: "images/post/post-2.jpg"
description: "This is meta description."
categories: ["video"]
draft: false
---
```