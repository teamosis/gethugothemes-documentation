---
title: 'Create New Post'
date: '2019-12-02T08:15:19-03:00'
weight: 10
draft: false
---

When you want to create a new post,  the command is `hugo new blog/new-post.md`.

## Configure Post

You can configure your blog post from the front-matter. Front-matter starts with `---` and end with also `---` . In this front matter you can give `title = rtificial Intelligence and Robotics`, `description = meta description`, `image = images/blog/post-thumb.jpg`, `categories` and `type`.

When you created a new post, the `draft` default value is `true`, which means it's not published yet. Make it false to publish the post, ex: `draft = false`.
After closing the front matter, give your post content. 

{{< notice tip >}}
Remember that every file that has a `.md` extension supports markdown.
{{< /notice >}}

### Example Front-Matter

```yml
---
title: "Artificial Intelligence and Robotics In A Nutshell"
description: "meta description"
image: "images/post/post-1.png"
date: 2021-01-24T18:19:25+06:00
categories: ["programming"]
type: "regular" # available types: [featured/regular]
draft: false
---
```