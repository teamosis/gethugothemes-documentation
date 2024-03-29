---
title: 'Create New Post'
date: '2019-12-02T08:15:19-03:00'
weight: 10
draft: false
---

Copper is a multilingual template. So when you want to create a new post, you need to define the language. For example, creating a new post in the English language, the command is `hugo new english/blog/new-post.md` and for French it's `hugo new french/blog/new-post.md`.

## Configure Post

You can configure your blog post from the front-matter. Front-matter starts with `---` and end with also `---` . In this front matter you can give `title = post title`, `author = author name`, `description = meta description`, `image = images/blog/post-thumb.jpg`, `date`, `categories` and `tags`.

When you created a new post, the `draft` default value is `true`, which means it's not published yet. Make it false to publish the post, ex: `draft = false`.
After closing the front matter, give your post content. 

{{< notice tip >}}
Remember that every file that has a `.md` extension supports markdown.
{{< /notice >}}

### Example Front-Matter

```yml
---
title : "Your ‘Surge Capacity’ Is Depleted It’s Why You Feel Awful to The Society"
image : "images/blogs/01.jpg"
date: 2020-03-14T15:40:24+06:00
author: "Ausie Makquis"
author_profile: "https://linkedin.com/in/#"
description : "this is meta description"
categories: ["Technology"]
draft : false
---
```