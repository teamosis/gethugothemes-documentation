---
title: 'Create New Post'
date: '2019-12-02T08:15:19-03:00'
weight: 10
draft: false
---

Small Apps is a multilingual template. So when you want to create a new post, you need to define the language. For example, creating a new post in the English language, the command is `hugo new english/blog/new-post.md` and for French it's `hugo new french/blog/new-post.md`.

## Configure Post

You can configure your blog post from the front-matter. Front-matter starts with `---` and end with also `---` . In this front matter you can give `title`, `date`, `author = author name`, `description = meta description`, `image = images/blog/post-thumb.jpg`, `categories`, `type` and `tags`.

When you created a new post, the `draft` default value is `true`, which means it's not published yet. Make it false to publish the post, ex: `draft = false`.
After closing the front matter, give your post content. 

{{< notice tip >}}
Remember that every file that has a `.md` extension supports markdown.
{{< /notice >}}

### Example Front-Matter

```yml
---
title: "Innovation distinguishes between a leader and a follower."
date: 2019-02-28T12:35:54+06:00
image : "images/blog/post-01.jpg"
image_webp : "images/blog/post-01.webp"
author : "Thomas Johnson"
description: "Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Cras ultricies ligula sed magna dictum porta."
type : "post"
---
```