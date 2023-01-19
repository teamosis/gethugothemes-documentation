---
title: 'Create New Post'
date: '2019-12-02T08:15:19-03:00'
weight: 15
draft: false
---

Bigspring is a multilingual template. So when you want to create a new post, you need to define the language. For example, creating a new post in the English language, the command is `hugo new english/blog/new-post.md` and for French it's `hugo new french/blog/new-post.md`.

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
title: "Adversus is a web-based dialer and practical CRM solution"
date: 2020-08-18T10:07:21+06:00
image: "images/blog/post-1.jpg"
author: "Awab Husameldin"
type: "featured"
description: "This is meta description"
draft: false
---
```